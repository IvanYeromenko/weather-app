import React from "react";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";
import { COLORS } from "@/constants";
import { styles } from "./styles";

export const Loader = ({
  style,
  ...props
}: ActivityIndicatorProps): JSX.Element => (
  <ActivityIndicator
    size={"large"}
    color={COLORS.primary}
    style={[styles.loader, style]}
    {...props}
  />
);
