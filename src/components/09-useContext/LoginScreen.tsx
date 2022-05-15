import React, { useContext } from 'react';
import UserContextInterface from '../../interfaces/UserContextInterface';
import "./styles.css";
import { UserContext } from './UserContext';

const LoginScreen = () => {

  const { user, setUser } = useContext(UserContext) as UserContextInterface;

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />

      <pre>{ JSON.stringify(user, null, 3) }</pre>

      {
        !user
        &&
        <button
          className="btn btn-primary"
          onClick={() => {
            setUser({
              id: 1,
              name: "Kadievka",
              email: "email@mail.com",
            });
          }}
        >
          Login
        </button>
      }

    </div>
  )
}



export default LoginScreen