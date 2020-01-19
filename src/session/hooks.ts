import React from "react";

import SessionContext from "./context";
import { IUser } from "./types";

export function useUser(): IUser {
  const {
    state: { user },
  } = React.useContext(SessionContext);

  return user;
}
