import type { i18n, TOptions } from "i18next";

export type TState = {
  instance: i18n | null;
};

export type TTranslationOptions = {
  [key: string]: string | number;
};

export type TTranslation = (
  key: string,
  options?: TOptions<TTranslationOptions>
) => string;
