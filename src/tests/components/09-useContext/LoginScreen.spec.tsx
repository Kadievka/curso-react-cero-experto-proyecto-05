import React, { useState } from 'react';
import {
  cleanup,
  fireEvent,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import { UserContext } from '../../../components/09-useContext/UserContext';
import UserInterface from '../../../interfaces/UserInterface';
import UserContextValueInterface from '../../../interfaces/UserContextValueInterface';
import LoginScreen, { defaultUser } from '../../../components/09-useContext/LoginScreen';

describe('LoginScreen tests', () => {

  beforeEach( () => {
    jest.clearAllMocks();
    cleanup();
  });


  it('should show the component successfully when there is an user', () => {

    const useStateHook = renderHook(() => useState<UserInterface>({
      id: 1,
      name: "mock-name",
      email: "mock-email",
    }));

    const [user, setUser] = useStateHook.result.current;

    const userContextValue: UserContextValueInterface = {
      user,
      setUser,
      temp: 1234,
    };

    const wrapper = render(
      <UserContext.Provider value={{...userContextValue}}>
        <LoginScreen />
      </UserContext.Provider>
    );

    const loginScreenTitle = screen.getByTestId("login-screen-titile");
    const loginScreenContent = screen.getByTestId("login-screen-content");
    const loginScreenButton = screen.queryByTestId("login-screen-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(loginScreenTitle.innerHTML.trim()).toBe("LoginScreen");
    expect(loginScreenContent.innerHTML.trim()).toStrictEqual(JSON.stringify(user, null, 3));
    expect(loginScreenButton).toBe(null);

    wrapper.unmount();

  });

  it('should show the component successfully when there is not an user, then click the login button a set other user', () => {

    const useStateHook = renderHook(() => useState<UserInterface>());

    const [user, setUser] = useStateHook.result.current;

    const userContextValue: UserContextValueInterface = {
      user,
      setUser,
      temp: 1234,
    };

    const wrapper = render(
      <UserContext.Provider value={{...userContextValue}}>
        <LoginScreen />
      </UserContext.Provider>
    );

    const loginScreenTitle = screen.getByTestId("login-screen-titile");
    const loginScreenContent = screen.getByTestId("login-screen-content");
    const loginScreenButton = screen.getByTestId("login-screen-button");

    expect(loginScreenTitle.innerHTML.trim()).toBe("LoginScreen");
    expect(loginScreenContent.innerHTML.trim()).toStrictEqual("");
    expect(loginScreenButton.innerHTML.trim()).toBe("Login");

    fireEvent.click(loginScreenButton);

    const [ newUser ] = useStateHook.result.current;
    expect(newUser).toStrictEqual(defaultUser);

    wrapper.unmount();

  });


});