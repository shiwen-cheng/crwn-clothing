import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
}); // 默认值

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);

      setCurrentUser(user);
    });

    return unsubscribe; // 给一个 unmount 的时候要运行的 callback
  }, []); // 只在 mount 的时候运行一次

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
  // 被 <UserContext.Provider></UserContext.Provider> 包围的，可以访问这个 context
};
