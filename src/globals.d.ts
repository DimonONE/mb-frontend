/// <reference types="gtag.js" />
declare module '*.sss';
declare module '*.svg';
declare module '*.gif';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.css';
declare module '*.ico';

declare const fullpage: (selector: any, some:any) => void;
declare var gapi: any;
declare var FB: any;
declare var fullpage_api: any;
declare var google: any;
declare var ga: any;
declare var GRAPH_ENDPOINT: string;
declare var fbq: any | undefined;

interface Window {
  order?: {
    id: number
    timestamp: number
    product: {
      id: number
      name: string
      price: number
    }
    status: 'success' | 'error'
  }
  IS_CANARY?: boolean
  __APOLLO_STATE__: import('@apollo/client').NormalizedCacheObject
  initialI18nStore: any
  initialLanguage: string
}
