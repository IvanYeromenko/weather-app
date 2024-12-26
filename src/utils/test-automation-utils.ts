import {Platform} from 'react-native';

export function injectViewId(id: string) {
  if (Platform.OS === 'ios') {
    return {
      testID: `test-${id}`,
    };
  }

  return {
    accessible: true,
    accessibilityLabel: `test-${id}`,
  };
}
