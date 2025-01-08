import React, {type ReactElement, useMemo} from 'react';

import {weatherStore} from '@/stores';
import {StoreContext} from './store-context';
import type {IStoreProviderProps} from './types';

export const StoreProvider = ({children}: IStoreProviderProps): ReactElement => {
  const contextValue = useMemo(
    () => ({
      weatherStore: weatherStore,
    }),
    [weatherStore],
  );

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};
