import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import React, { createContext, useState, useContext, useEffect } from 'react';
import translations from './namespaces';

const APP_LANGUAGE = 'appLanguage';

const isILanguageApp = (lang: string): lang is ILanguageApp => ['en'].includes(lang);

export type ILanguageApp = 'en';

interface ILocalizationContext {
  translations: (typeof translations)['en'];
  setAppLanguage: (lang: ILanguageApp) => void;
  appLanguage: string;
}

const getTranslationsForLanguage = (lang: ILanguageApp) => translations[lang] || translations.en;

export const LocalizationContext = createContext<ILocalizationContext>({
  translations: getTranslationsForLanguage('en'),
  setAppLanguage: () => undefined,
  appLanguage: i18next.language,
});

export const LocalizationProvider = ({ children }: { children: React.ReactNode }) => {
  const [appLanguage, setAppLanguage] = useState<ILanguageApp>('en');
  const [currentTranslations, setCurrentTranslations] = useState(
    getTranslationsForLanguage(appLanguage),
  );

  const setLanguage = async (language: 'en') => {
    setAppLanguage(language);
    setCurrentTranslations(getTranslationsForLanguage(language));
    i18next.changeLanguage(language);
    await AsyncStorage.setItem(APP_LANGUAGE, language);
  };

  useEffect(() => {
    const loadAppLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem(APP_LANGUAGE);

      if (storedLanguage && isILanguageApp(storedLanguage)) {
        setLanguage(storedLanguage);
      }
    };

    loadAppLanguage();
  }, []);

  return (
    <LocalizationContext.Provider
      value={{
        translations: currentTranslations,
        setAppLanguage: setLanguage,
        appLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalizationContext = () => useContext(LocalizationContext);
