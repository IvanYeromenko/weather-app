import {makeAutoObservable} from 'mobx';
import {BASE_URL, KEY, UNKNOWN_ERROR_MESSAGE} from '@/constants';
import type {ICurrentWeather, IErrorResponse, IForecast, ILocation, IWeatherData} from './types';

export class WeatherStore {
  private _isData: boolean = false;
  private _data: IWeatherData | undefined = undefined;
  private _location: ILocation | undefined = undefined;
  private _currentWeather: ICurrentWeather | undefined = undefined;
  private _forecast: IForecast | undefined = undefined;
  private _fetchInfo = {
    isLoading: false,
    error: null as string | null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  get isLoading(): boolean {
    return this._fetchInfo.isLoading;
  }

  get isData(): boolean {
    return this._isData;
  }

  get error(): string | null {
    return this._fetchInfo.error;
  }

  get data(): IWeatherData | undefined {
    return this._data;
  }

  get location(): ILocation | undefined {
    return this._location;
  }

  get currentWeather(): ICurrentWeather | undefined {
    return this._currentWeather;
  }

  get forecast(): IForecast | undefined {
    return this._forecast;
  }

  private startLoading() {
    this._fetchInfo.isLoading = true;
    this._fetchInfo.error = null;
  }

  private endLoading(error: IErrorResponse | null) {
    this._fetchInfo.isLoading = false;
    this._fetchInfo.error = error ? error.message || UNKNOWN_ERROR_MESSAGE : error;
  }

  private setData(data: IWeatherData) {
    this._data = data;
    this._isData = true;
    this._location = data.location;
    this._currentWeather = data.current;
    this._forecast = data.forecast;
  }

  private resetData() {
    this._data = undefined;
    this._isData = false;
    this._location = undefined;
    this._currentWeather = undefined;
    this._forecast = undefined;
  }

  async fetchData(location: string) {
    this.startLoading();
    try {
      const response = await fetch(`${BASE_URL}?key=${KEY}&q=${location}&days=1&aqi=no`);

      const data = await response.json();

      if (response.ok) {
        this.setData(data);
        this.endLoading(null);
      } else {
        this.resetData();
        this.endLoading(data?.error as IErrorResponse);
      }
    } catch (error) {
      this.endLoading(error as IErrorResponse);
      console.error(error);
    }
  }

  public reset() {
    this._fetchInfo.isLoading = false;
    this._fetchInfo.error = '';
    this._isData = false;
    this._data = undefined;
    this._location = undefined;
    this._currentWeather = undefined;
    this._forecast = undefined;
  }
}

export const weatherStore = new WeatherStore();
