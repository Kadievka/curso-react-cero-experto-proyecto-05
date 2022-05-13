import React, { useContext } from 'react';
import UserContextInterface from './interfaces/UserContextInterface';
import "./styles.css";
import { UserContext } from './UserContext';

const HomeScreen = () => {

  //Y de esta manera se accede al value de UserContext
  const userContext = useContext(UserContext);

  const { user } = userContext as UserContextInterface;

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />

      <pre>{ JSON.stringify(user, null, 3) }</pre>

    </div>
  )
}

export default HomeScreen