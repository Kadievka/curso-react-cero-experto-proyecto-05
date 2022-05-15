import React, { useState } from 'react';
import AppRouter from './AppRouter';
import UserInterface from '../../interfaces/UserInterface';
import "./styles.css";
import { UserContext } from './UserContext';

const Main = () => {

  const [user, setUser] = useState<UserInterface>();

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      temp: 1234
    }}>

      <AppRouter />

    </UserContext.Provider>
  )
}

export default Main