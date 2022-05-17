import React, { useState } from 'react';
import {
  cleanup,
  render,
  renderHook,
  screen,
} from "@testing-library/react";
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import UserInterface from '../../../interfaces/UserInterface';
import UserContextValueInterface from '../../../interfaces/UserContextValueInterface';

describe('HomeScreen tests', () => {

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
        <HomeScreen />
      </UserContext.Provider>
    );

    const homeScreenTitle = screen.getByTestId("home-screen-titile");
    const homeScreenContent = screen.getByTestId("home-screen-content");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(homeScreenTitle.innerHTML.trim()).toBe("HomeScreen");
    expect(homeScreenContent.innerHTML.trim()).toStrictEqual(JSON.stringify(user, null, 3));

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
        <HomeScreen />
      </UserContext.Provider>
    );

    const homeScreenTitle = screen.getByTestId("home-screen-titile");
    const homeScreenContent = screen.getByTestId("home-screen-content");

    expect(wrapper.asFragment()).toMatchSnapshot();

    expect(homeScreenTitle.innerHTML.trim()).toBe("HomeScreen");
    expect(homeScreenContent.innerHTML.trim()).toStrictEqual("");

    wrapper.unmount();

  });


});