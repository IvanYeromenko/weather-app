import {StyleSheet} from 'react-native';
import {COLORS} from '@/constants';
import {SHADOW} from '@/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: 16,
    ...SHADOW,
  },
  location: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.black,
    flexShrink: 1,
  },
  temp: {
    fontSize: 28,
    fontWeight: '500',
    color: COLORS.black,
    flexShrink: 1,
  },
  condition: {
    fontSize: 16,
    color: COLORS.black,
    flexShrink: 1,
  },
  locationIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tempCondition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fiveHoursForecast: {
    flexDirection: 'row',
  },
  forecast: {
    fontSize: 16,
    color: COLORS.black,
    flexShrink: 1,
    paddingVertical: 8,
  },
});
