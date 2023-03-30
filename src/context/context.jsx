import { useState } from "react";
import { createContext } from "react";

// actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// value hold the actual user
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  let value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserProvider;
