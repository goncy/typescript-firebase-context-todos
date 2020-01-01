import React from "react";

import { IUser, Context, State, Actions, Status } from "./types";
import auth from "./resources";
import Login from "./pages/Login";

interface Props {
  children: JSX.Element;
}

const SessionContext = React.createContext<Context | null>(null);

const SessionProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<IUser | null>(null);
  const [status, setStatus] = React.useState<Status>("init");

  React.useEffect(
    () =>
      auth.onChange(user => {
        setUser(user);

        setStatus("restored");
      }),
    []
  );

  if (!user) return <Login signIn={auth.signIn} status={status} />;

  const state: State = { user };
  const actions: Actions = { signOut: auth.signOut, signIn: auth.signIn };

  return <SessionContext.Provider value={{ state, actions }}>{children}</SessionContext.Provider>;
};

export { SessionProvider as Provider, SessionContext as default };
