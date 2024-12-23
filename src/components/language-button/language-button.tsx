import React from "react";
import { Pressable, type PressableProps, Text, View } from "react-native";
import { SupportedLanguageList } from "@/constants";
import { useLocale } from "@/hooks";
import { styles } from "./styles";

export const LanguageButton = ({ ...props }: PressableProps): JSX.Element => {
  const { currentLocale, updateLocale } = useLocale();
  const displayedLanguage = currentLocale.toUpperCase();

  const handleChangeLanguage = () => {
    updateLocale(
      currentLocale === SupportedLanguageList[0]
        ? SupportedLanguageList[1]
        : SupportedLanguageList[0]
    );
  };

  return (
    <Pressable onPress={handleChangeLanguage} {...props}>
      <View style={styles.languageButton}>
        <Text style={styles.text}>{displayedLanguage}</Text>
      </View>
    </Pressable>
  );
};
