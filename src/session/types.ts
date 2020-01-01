import { User } from "firebase";

export interface State {
  user: User;
}

export interface Actions {
  signIn: () => void;
  signOut: () => void;
}

export interface Context {
  state: State;
  actions: Actions;
}

export type Status = "init" | "restored";

export type IUser = User;
