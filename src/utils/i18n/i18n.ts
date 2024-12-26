import 'intl-pluralrules'; //To resolve issue mentioned here https://www.i18next.com/misc/migration-guide
import i18next, {type i18n, type Resource, type TOptions} from 'i18next';
import translations from '@/../localization';
import type {SupportedLanguageList} from '@/constants';
import type {TState, TTranslationOptions} from './types';

const state: TState = {
  instance: null,
};

const initializeI18nInstance = async (language: string, resources: Resource): Promise<void> => {
  const instance = i18next.createInstance();
  await instance.init({
    resources,
    lng: language,
    fallbackLng: Object.keys(resources)[0],
  });
  state.instance = instance;
};

export const getI18nInstance = (): i18n | null => state.instance;

export const initializeI18n = async (
  language: (typeof SupportedLanguageList)[number],
): Promise<void> => await initializeI18nInstance(language, translations);

export const t = (key: string, options?: TOptions<TTranslationOptions>): string =>
  getI18nInstance()?.t(key, options) ?? '';
