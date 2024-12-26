import {StyleSheet} from 'react-native';
import {COLORS} from '@/constants';
import {SHADOW} from '@/theme';

export const styles = StyleSheet.create({
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    borderColor: COLORS.darkGrey,
    borderWidth: 1,
    borderRadius: 100,
    height: 48,
    ...SHADOW,
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
  },
  lable: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
});
