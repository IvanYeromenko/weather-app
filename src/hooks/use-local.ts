import {useContext} from 'react';

import {TranslationContext, type TTranslationContextValue} from '@/tools';

export const useLocale = (): TTranslationContextValue => {
  const payload = useContext(TranslationContext);

  if (!payload) {
    throw new Error('useLocale must be used within a TranslationProvider.');
  }

  return payload;
};
