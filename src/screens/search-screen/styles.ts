import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  languageButton: {
    marginVertical: 20,
  },
  searchField: {
    marginBottom: 40,
  },
  button: {
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    bottom: 20,
  },
  error: {
    textAlign: "center",
  },
});
