import {useContext} from 'react';

import {type IStoreContextValue, StoreContext} from '@/tools';

export const useStore = (): IStoreContextValue => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store;
};
