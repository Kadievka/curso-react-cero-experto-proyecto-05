import React, { useContext } from 'react';
import UserContextInterface from '../../interfaces/UserContextInterface';
import UserInterface from '../../interfaces/UserInterface';
import "./styles.css";
import { UserContext } from './UserContext';

export const defaultUser: UserInterface = {
  id: 1,
  name: "Kadievka",
  email: "email@mail.com",
};

const LoginScreen = () => {

  const { user, setUser } = useContext(UserContext) as UserContextInterface;

  return (
    <div>
      <h1 data-testid="login-screen-titile">LoginScreen</h1>
      <hr />

      <pre data-testid="login-screen-content">{ JSON.stringify(user, null, 3) }</pre>

      {
        !user
        &&
        <button
          className="btn btn-primary"
          onClick={() => {
            setUser(defaultUser);
          }}
          data-testid="login-screen-button"
        >
          Login
        </button>
      }

    </div>
  )
}



export default LoginScreen