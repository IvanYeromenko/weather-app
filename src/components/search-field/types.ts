import {TextInputProps, ViewStyle} from 'react-native';

export interface ISearchFieldProps extends TextInputProps {
  lable?: string;
  containerStyle?: ViewStyle;
  onEndIconPress?: () => void;
}
