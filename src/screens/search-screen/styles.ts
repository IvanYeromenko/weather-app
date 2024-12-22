import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  searchField: {
    marginTop: 20,
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
