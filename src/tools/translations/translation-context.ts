import {createContext} from 'react';
import type {TTranslationContextValue} from './types';

export const TranslationContext = createContext<TTranslationContextValue | null>(null);
