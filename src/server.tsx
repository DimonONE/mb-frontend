import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { StaticRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { Helmet } from 'react-helmet';
import I18nextFSBackend from 'i18next-fs-backend';
import I18nextHTTPMiddleware from 'i18next-http-middleware';
import { I18nextProvider } from 'react-i18next';

import { FaviconICO } from '@static/img/favicon.ico';
import { getApolloClient } from '@client';
import {
  i18n,
  languages,
  commonOptions,
  defaultLang,
  getLanguageFromPath,
  getPathForLanguage,
  getLanguageWithoutLocale,
} from '@utils/i18n';
import App from './BaseApp';

const jsDirectory = fs.realpathSync(process.cwd());

const server = express();

export const renderApp = async (req: express.Request, res: express.Response) => {
  const languageFromPath = getLanguageFromPath(req.path);
  const languageWithoutLocale = getLanguageWithoutLocale(req.i18n.language);

  // Language detector may add locale to language, we don't need it
  if (languageFromPath === languageWithoutLocale && languageFromPath !== req.i18n.language) {
    req.i18n.changeLanguage(languageWithoutLocale);
  }
  if (languageFromPath !== req.i18n.language) {
    res.redirect(getPathForLanguage(req.path, languageWithoutLocale));
    return;
  }

  // We create an extractor from the statsFile
  const extractor = new ChunkExtractor({
    statsFile: path.resolve('build/loadable-stats.json'),
    // razzle client bundle entrypoint is client.js
    entrypoints: ['client'],
  });

  const client = getApolloClient({
    headers: {
      cookie: req.header('Cookie')
    }
  });
  const routerContext: { url?: string } = {};
  const app = (
    <ChunkExtractorManager extractor={extractor}>
      <I18nextProvider i18n={req.i18n}>
        <ApolloProvider client={client}>
          <StaticRouter
            basename={defaultLang !== languageFromPath ? languageFromPath : undefined}
            context={routerContext}
            location={req.url}
          >
            <App />
          </StaticRouter>
        </ApolloProvider>
      </I18nextProvider>
    </ChunkExtractorManager>
  );

  if (routerContext.url) {
    res.redirect(routerContext.url);
    return;
  }

  // get Apollo initial state
  await getDataFromTree(app);

  // render app
  const markup = renderToString(app);

  // collect head tags
  const helmet = Helmet.renderStatic();

  // collect script tags
  const scriptTags = extractor.getScriptTags();

  // collect "preload/prefetch" links
  const linkTags = extractor.getLinkTags();

  // collect style tags
  const styleTags = extractor.getStyleTags();

  // get i18n initial state
  const initialI18nStore = {};
  req.i18n.languages.forEach(
    lang => {
    initialI18nStore[lang] = req.i18n.services.resourceStore.data[lang];
    }
  );
  const initialLanguage = req.i18n.language;

  const html =
    // prettier-ignore
    `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="${FaviconICO}">
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${linkTags}
    ${styleTags}
    <script>
      window.initialI18nStore = ${JSON.stringify(initialI18nStore)};
      window.initialLanguage = '${initialLanguage}';
    </script>
    
    <style>
        .lazyload:not(.lazyloaded) {
            filter: blur(8px);
            transition: filter .3s;
        }
    </style>
    
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NJ24H22');</script>
    <!-- End Google Tag Manager -->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157999589-1"></script>
    <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-157999589-1');
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <script>
        function handleClientLoad() {
            // Load the API's client and auth2 modules.
            // Call the initClient function after the modules load.
            gapi.load('client:auth2', initClient);
        }
        function initClient() {
            gapi.client.init({
                'clientId': '${process.env.RAZZLE_GOOGLE_CLIENT_ID}',
                'scope': 'profile email'
            });
        }
    </script>
    <script
        async
        src="https://apis.google.com/js/api.js"
        onload="this.onload=function(){};handleClientLoad()"
        onreadystatechange="if (this.readyState === 'complete') this.onload()"
    >
    </script>

    <script>
        window.fbAsyncInit = function() {
            FB.init({
                appId            : '${process.env.RAZZLE_FACEBOOK_APP_ID}',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v3.3'
            });
        };
    </script>
    <script src="https://connect.facebook.net/en_US/sdk.js" async></script>
    <meta name="facebook-domain-verification" content="kmgq3zrupqc6apdoi0q7adfmirbh9s" />
</head>
<body ${helmet.bodyAttributes.toString()}>
    <div id="root">${markup}</div>
    <script>
      window.__APOLLO_STATE__ = ${JSON.stringify(client.extract()).replace(/</g, '\\\u003c')};
    </script>
    ${scriptTags}
</body>
</html>`;

  return { html };
};

i18n
  /* tslint:disable:no-any */
  .use(I18nextFSBackend as any)
  .use(I18nextHTTPMiddleware.LanguageDetector)
  .init({
    ...commonOptions,
    backend: {
      loadPath: `${jsDirectory}/src/locales/{{lng}}/{{ns}}.json`,
    },
    preload: languages,
  })
  .then(
    () => {
      server
      .disable('x-powered-by')
      .use(I18nextHTTPMiddleware.handle(i18n))
      .use('/locales', express.static(`${jsDirectory}/src/locales`, { fallthrough: false }))
      .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
      .use(
        '/api/graph',
        (req, res) => {
          const request = require('request');
          const proxyPath = `http://localhost:8080${req.originalUrl}`;

          req
            .pipe(request({ uri: proxyPath, qs: req.query }))
            .pipe(res);
        }
      )
      .use(
        '/admin/api',
        (req, res) => {
          const request = require('request');
          const proxyPath = `http://localhost:8080${req.originalUrl}`;

          req
            .pipe(request({ uri: proxyPath }))
            .pipe(res);
        }
      )
      .get('/*', async (req, res, next) => {
        try {
          const { html } = await renderApp(req, res);
          res.send(html);
        } catch (error) {
          next(error);
        }
      });
    }
  );

export default server;
