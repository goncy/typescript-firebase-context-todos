import React from "react";

import SessionContext from "./context";
import { IUser, Context } from "./types";

export function useUser(): IUser {
  const {
    state: { user },
  } = React.useContext(SessionContext as React.Context<Context>);

  return user;
}
