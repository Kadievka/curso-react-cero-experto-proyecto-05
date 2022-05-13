import UserInterface from "./UserInterface";

export default interface UserContextInterface {
  user?: UserInterface,
  setUser: Function,
  temp: number
}