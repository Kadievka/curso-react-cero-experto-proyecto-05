import React, { useContext } from 'react';
import "./styles.css";
import { UserContext } from './UserContext';

const HomeScreen = () => {

  //Y de esta manera se accede al value de UserContext
  const userContext = useContext(UserContext);

  console.log("AQUI", userContext)

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
    </div>
  )
}

export default HomeScreen