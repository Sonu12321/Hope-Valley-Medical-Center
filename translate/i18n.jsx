import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detects user language
  .use(HttpApi) // loads translations from your server
  .init({
    supportedLngs: ['en', 'es', 'fr'], // Add your supported languages here
    fallbackLng: 'en', // Default language
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    react: {
      useSuspense: false // Set to false if you do not use Suspense
    }
  });

export default i18n;
