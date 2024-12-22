import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";
import { SHADOW } from "@/theme";

export const styles = StyleSheet.create({
  active: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderColor: COLORS.darkPrimary,
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: 12,
    ...SHADOW,
  },
  disabled: {
    alignItems: "center",
    backgroundColor: COLORS.inactive,
    paddingVertical: 12,
    borderRadius: 100,
    ...SHADOW,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
