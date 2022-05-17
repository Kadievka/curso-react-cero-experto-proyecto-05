import React, { useState } from 'react';
import AppRouter from './AppRouter';
import UserInterface from '../../interfaces/UserInterface';
import "./styles.css";
import { UserContext } from './UserContext';
import UserContextValueInterface from '../../interfaces/UserContextValueInterface';

const Main = () => {

  const [user, setUser] = useState<UserInterface>();

  const userContextValue: UserContextValueInterface = {
    user,
    setUser,
    temp: 1234
  };

  return (
    <UserContext.Provider value={{...userContextValue}}>

      <AppRouter />

    </UserContext.Provider>
  )
}

export default Main