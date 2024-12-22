import React from "react";
import { Pressable, Text, TextInput as RNTextInput, View } from "react-native";
import { Cross, SearchMagnifyingGlass } from "@/assets";
import { COLORS, ICON_SIZE } from "@/constants";
import { injectViewId } from "@/utils";
import { styles } from "./styles";
import type { ISearchFieldProps } from "./types";

export const SearchField = ({
  value,
  onChangeText,
  onEndIconPress,
  lable,
  containerStyle,
  style,
  ...props
}: ISearchFieldProps): JSX.Element => {
  const handleChangeText = (text: string) => {
    onChangeText?.(text);
  };

  const handleEndIconPress = () => {
    onChangeText?.("");
    onEndIconPress?.();
  };

  return (
    <View style={containerStyle} {...props}>
      {lable && <Text style={styles.lable}>{lable}</Text>}
      <View style={styles.searchField}>
        <Pressable>
          <SearchMagnifyingGlass width={ICON_SIZE} height={ICON_SIZE} />
        </Pressable>
        <RNTextInput
          style={[styles.textInput, style]}
          value={value}
          onChangeText={handleChangeText}
          placeholderTextColor={COLORS.lightGrey}
          {...props}
        />
        {value && (
          <Pressable
            {...injectViewId("clear-icon")}
            onPress={handleEndIconPress}
          >
            <Cross width={ICON_SIZE} height={ICON_SIZE} />
          </Pressable>
        )}
      </View>
    </View>
  );
};
