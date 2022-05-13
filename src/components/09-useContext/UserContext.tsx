import { createContext } from 'react';
import { UserInterface } from './Main';

export const UserContext = createContext<UserInterface | null>(null);
