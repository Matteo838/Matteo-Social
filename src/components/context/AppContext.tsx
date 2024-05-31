import { createContext } from 'react';
import Posta from '../posts/post';

export interface IAppContext {
    jsonData: Posta[] | undefined,
    setJsonData: (args: Posta[]) => void
}

export const AppContext = createContext<IAppContext | null>(null);
