import { ViewProps } from "react-native";
import type { ICurrentWeather, IForecast, ILocation } from "@/stores";

export interface IWeatherCardProps extends ViewProps {
  location: ILocation;
  currentWeather: ICurrentWeather;
  forecast: IForecast;
}

export interface IFiveHoursForecast extends ViewProps {
  time: string;
  temp_c: number;
}
