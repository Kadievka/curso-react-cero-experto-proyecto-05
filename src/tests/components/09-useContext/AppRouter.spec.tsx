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
import AppRouter from '../../../components/09-useContext/AppRouter';

describe('AppRouter tests', () => {

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
        <AppRouter />
      </UserContext.Provider>
    );

    const appRouterContainer = screen.getByTestId("app-router-container");
    const navbar = screen.getByTestId("navbar");
    const loginButton = screen.queryByTestId("navbar-login-button");
    const logoutButton = screen.queryByTestId("navbar-logout-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(appRouterContainer).toHaveProperty("className", "container");
    expect(navbar).toHaveProperty("className", "navbar navbar-expand-sm navbar-dark bg-dark");
    expect(loginButton).toBe(null);
    expect(logoutButton?.innerHTML.trim()).toBe("Logout");

    wrapper.unmount();

  });

  it('should show the component successfully when there is not an user', () => {

    const useStateHook = renderHook(() => useState<UserInterface>());

    const [user, setUser] = useStateHook.result.current;

    const userContextValue: UserContextValueInterface = {
      user,
      setUser,
      temp: 1234,
    };

    const wrapper = render(
      <UserContext.Provider value={{...userContextValue}}>
        <AppRouter />
      </UserContext.Provider>
    );

    const appRouterContainer = screen.getByTestId("app-router-container");
    const navbar = screen.getByTestId("navbar");
    const loginButton = screen.queryByTestId("navbar-login-button");
    const logoutButton = screen.queryByTestId("navbar-logout-button");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(appRouterContainer).toHaveProperty("className", "container");
    expect(navbar).toHaveProperty("className", "navbar navbar-expand-sm navbar-dark bg-dark");
    expect(loginButton?.innerHTML.trim()).toBe("Login");
    expect(logoutButton).toBe(null);

    wrapper.unmount();

  });

  it('should remove the user when logout in the Navbar', () => {

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
        <AppRouter />
      </UserContext.Provider>
    );

    const loginButton = screen.queryByTestId("navbar-login-button");
    const logoutButton = screen.getByTestId("navbar-logout-button");

    expect(loginButton).toBe(null);
    expect(logoutButton?.innerHTML.trim()).toBe("Logout");

    fireEvent.click(logoutButton);

    const [ loggedOutUser ] = useStateHook.result.current;

    expect(loggedOutUser).toBe(null);

    wrapper.unmount();

  });

});