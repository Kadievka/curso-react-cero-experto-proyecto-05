import React, { useContext } from 'react';
import UserContextInterface from '../../interfaces/UserContextInterface';
import "./styles.css";
import { UserContext } from './UserContext';

const HomeScreen = () => {

  //Y de esta manera se accede al value de UserContext
  const userContext = useContext(UserContext);

  const { user } = userContext as UserContextInterface;

  return (
    <div>
      <h1 data-testid="home-screen-titile">HomeScreen</h1>
      <hr />

      <pre data-testid="home-screen-content" >{ JSON.stringify(user, null, 3) }</pre>

    </div>
  )
}

export default HomeScreen