import { auth, providers } from "../firebase";

import { IUser } from "./types";

export default {
  signIn: () => auth.signInWithPopup(providers.google),
  signOut: () => auth.signOut(),
  onChange: (callback: (user: IUser | null) => void) => auth.onAuthStateChanged(callback),
};
