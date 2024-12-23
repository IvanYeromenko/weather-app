import React, {
  type ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import { SupportedLanguageList } from "@/constants";
import { getI18nInstance, initializeI18n, t } from "@/utils";
import { TranslationContext } from "./translation-context";
import { TSupportedLanguage, TTranslationProviderProps } from "./types";

export const TranslationProvider = ({
  children,
}: TTranslationProviderProps): ReactElement => {
  const [selectedLocale, setLocale] = useState<TSupportedLanguage>(
    SupportedLanguageList[0]
  );

  initializeI18n(SupportedLanguageList[0]);

  async function updateLocale(selection: TSupportedLanguage): Promise<void> {
    setLocale(selection);
    await getI18nInstance()?.changeLanguage(selection);
  }

  const updateLocaleMemoized = useCallback(updateLocale, [selectedLocale]);

  const contextValue = useMemo(
    () => ({
      currentLocale: selectedLocale,
      updateLocale: updateLocaleMemoized,
      t,
    }),
    [selectedLocale, updateLocaleMemoized]
  );

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};
