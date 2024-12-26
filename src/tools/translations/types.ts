import type {ReactNode} from 'react';
import type {i18n} from 'i18next';
import {SupportedLanguageList} from '@/constants';
import type {TTranslation} from '@/utils';

export type TSupportedLanguage = (typeof SupportedLanguageList)[number];

export type TState = {
  instance: i18n | null;
};

export type TTranslationProviderProps = {
  children: ReactNode;
};

export type TTranslationContextValue = {
  currentLocale: TSupportedLanguage;
  updateLocale: (language: TSupportedLanguage) => Promise<void>;
  t: TTranslation;
};
