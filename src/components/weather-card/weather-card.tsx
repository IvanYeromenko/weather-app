import React, {useMemo} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {injectViewId} from '@/utils';
import {styles} from './styles';
import type {IFiveHoursForecast, IWeatherCardProps} from './types';

const ICON_SIZE = 45;

export const WeatherCard = ({
  style,
  location,
  currentWeather,
  forecast,
  ...props
}: IWeatherCardProps): JSX.Element => {
  const currentTime = useMemo(() => new Date(), []);

  const fiveHoursFromNow = useMemo(
    () => new Date(currentTime.getTime() + 5 * 60 * 60 * 1000),
    [currentTime],
  );

  const forecastData = useMemo(
    () =>
      forecast.forecastday
        .map(forecastDay =>
          forecastDay.hour
            .map(hour => ({
              time: hour.time,
              temp_c: hour.temp_c,
            }))
            .filter(hour => {
              const hourTime = new Date(hour.time);
              return hourTime >= currentTime && hourTime <= fiveHoursFromNow;
            }),
        )
        .flat(),
    [currentTime, fiveHoursFromNow, forecast.forecastday],
  );

  const renderItem = ({item}: {item: IFiveHoursForecast}): JSX.Element => {
    const time = item.time.split(' ')[1];
    return (
      <View style={styles.fiveHoursForecast}>
        <Text style={styles.forecast}>{time} - </Text>
        <Text style={styles.forecast}>{item.temp_c}°С</Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, style]} {...props}>
      <View>
        <View style={styles.locationIcon}>
          <Text style={styles.location}>
            {location.country}, {location.name}
          </Text>
          <Image
            {...injectViewId('condition-icon')}
            source={{
              uri: `https:${currentWeather.condition.icon}`,
            }}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </View>
        <View style={styles.tempCondition}>
          <Text style={styles.temp}>{currentWeather.temp_c}°С</Text>
          <Text style={styles.condition}>{currentWeather.condition.text}</Text>
        </View>
      </View>
      <FlatList
        {...injectViewId('forecast-list')}
        keyExtractor={item => item.time}
        data={forecastData}
        renderItem={renderItem}
      />
    </View>
  );
};
