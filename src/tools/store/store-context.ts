import {createContext} from 'react';

import type {IStoreContextValue} from './types';

export const StoreContext = createContext<IStoreContextValue | null>(null);
