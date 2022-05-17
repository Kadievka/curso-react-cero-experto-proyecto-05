import UserInterface from "./UserInterface";

export default interface UserContextValueInterface {
  user?: UserInterface,
  setUser: Function,
  temp: number
}