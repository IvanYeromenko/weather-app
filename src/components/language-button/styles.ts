import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";
import { SHADOW } from "@/theme";

export const styles = StyleSheet.create({
  languageButton: {
    alignItems: "center",
    alignSelf: 'flex-end',
    backgroundColor: COLORS.primary,
    borderColor: COLORS.darkPrimary,
    borderWidth: 1,
    borderRadius: 12,
    ...SHADOW,
  },
  text: {
    color: COLORS.white,
    fontWeight: "600",
    padding: 12,
  },
});
