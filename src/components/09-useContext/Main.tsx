import React from 'react';
import AppRouter from './AppRouter';
import "./styles.css";
import {UserContext} from './UserContext';

export interface UserInterface {
  id: number;
  name: string,
  email: string,
}

const Main = () => {

  //Ahora estará disponible en todos los componentes

  const user: UserInterface = {
    id: 1234,
    name: "Kadievka",
    email: "example@gmail.com",
  }

  return (
    <UserContext.Provider value={user}>

      <AppRouter />

    </UserContext.Provider>
  )
}

export default Main