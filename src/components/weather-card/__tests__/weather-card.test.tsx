import React from 'react';
import {describe, expect, it} from '@jest/globals';
import {render} from '@testing-library/react-native';
import {WeatherCard} from '@/components';
import {ICurrentWeather, IForecast, ILocation} from '@/stores';

const mockProps = {
  style: {},
  location: {
    country: 'CountryName',
    name: 'CityName',
  },
  currentWeather: {
    temp_c: 25,
    condition: {
      text: 'Sunny',
      icon: '/icon.png',
    },
  },
  forecast: {
    forecastday: [
      {
        hour: Array.from({length: 24}, (_, i) => ({
          time: `2024-12-21 ${i.toString().padStart(2, '0')}:00`,
          temp_c: 20 + i,
        })),
      },
    ],
  },
};

describe('WeatherCard', () => {
  it('should render current weather content', () => {
    const {getByText, getByTestId} = render(
      <WeatherCard
        location={mockProps.location as ILocation}
        currentWeather={mockProps.currentWeather as ICurrentWeather}
        forecast={mockProps.forecast as IForecast}
      />,
    );
    expect(getByText('CountryName, CityName')).toBeTruthy();
    expect(getByText('25°С')).toBeTruthy();
    expect(getByText('Sunny')).toBeTruthy();
    const clearIcon = getByTestId('test-condition-icon');
    expect(clearIcon.props.source.uri).toBe('https:/icon.png');
  });

  it('should render the FlatList with the correct number of items', () => {
    const {getByTestId} = render(
      <WeatherCard
        location={mockProps.location as ILocation}
        currentWeather={mockProps.currentWeather as ICurrentWeather}
        forecast={mockProps.forecast as IForecast}
      />,
    );
    const flatList = getByTestId('test-forecast-list');
    expect(flatList.props.data.length).toBe(
      mockProps.forecast.forecastday[0].hour.filter(hour => {
        const hourTime = new Date(hour.time);
        const currentTime = new Date();
        const fiveHoursFromNow = new Date(currentTime.getTime() + 5 * 60 * 60 * 1000);
        return hourTime >= currentTime && hourTime <= fiveHoursFromNow;
      }).length,
    );
  });

  it('should display the correct icon URL for current weather', () => {
    const {getByTestId} = render(
      <WeatherCard
        location={mockProps.location as ILocation}
        currentWeather={mockProps.currentWeather as ICurrentWeather}
        forecast={mockProps.forecast as IForecast}
      />,
    );
    const clearIcon = getByTestId('test-condition-icon');
    expect(clearIcon.props.source.uri).toBe('https:/icon.png');
  });
});
