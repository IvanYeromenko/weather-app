import React from "react";
import { Pressable, Text, View } from "react-native";
import { COLORS } from "@/constants";
import { styles } from "./styles";
import type { IButtonProps } from "./types";

export const Button = ({
  text,
  disabled,
  style,
  ...props
}: IButtonProps): JSX.Element => (
    <Pressable style={style} disabled={disabled} {...props}>
      <View style={disabled ? styles.disabled : styles.active}>
        <Text
          style={[
            styles.text,
            { color: disabled ? COLORS.lightGrey : COLORS.white },
          ]}
        >
          {text}
        </Text>
      </View>
    </Pressable>
  );
