import {ReactNode} from 'react';

import {WeatherStore} from '@/stores';

export interface IStoreContextValue {
  weatherStore: WeatherStore;
}

export interface IStoreProviderProps {
  children: ReactNode;
}
