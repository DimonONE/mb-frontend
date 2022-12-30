import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import I18nextHTTPBackend from 'i18next-http-backend';

export const languages = [
  'ru',
  'uk',
];
export const namespaces = [
  'common',
  'student',
  'teacher',
  'landing',
  'online-lading',
];
export const defaultLang = 'ru' as const;
export const commonOptions = {
  load: 'languageOnly' as const,
  nonExplicitSupportedLngs: true,
  supportedLngs: languages,
  fallbackLng: defaultLang,
  ns: namespaces,
  defaultNS: 'common',
  keySeparator: false as const,
  nsSeparator: '~',
};

// i18n initialization
i18n.use(initReactI18next);

// Browser specific initialization
if (typeof window !== 'undefined' && !i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(I18nextHTTPBackend);
  i18n.init({
    ...commonOptions,
    detection: {
      caches: ['cookie', 'localStorage']
    }
  });
}

export { i18n };

// utils

const GET_LANGUAGE_REGEXP = new RegExp(
  `^/(?<language>${languages.join('|')})/|$`
);

export const getLanguageFromPath = (path: string) => {
  const match = path.match(GET_LANGUAGE_REGEXP);
  const { language } = match.groups;

  return language || defaultLang;
};

export const getPathForLanguage = (path: string, language: string) => {
  if (!languages.includes(language)) {
    throw new Error(`Language ${language} does not exist in list of supported languages`);
  }

  const languageFromPath = getLanguageFromPath(path);
  if (languageFromPath === defaultLang) {
    if (language === defaultLang) {
      return path;
    }
    return `/${language}${path}`;
  }
  if (language === defaultLang) {
    return `/${path.replace(GET_LANGUAGE_REGEXP, '')}`;
  }

  return path.replace(GET_LANGUAGE_REGEXP, `/${language}/`);
};

export const getLanguageWithoutLocale = (langauge: string) => (
  langauge.match(/^\w+/)[0]
);
