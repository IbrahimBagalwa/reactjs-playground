import { useEffect, createContext, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListern,
} from "../utils/firebase.util";
import { createAction } from "../utils/reducer/reducer.utils";

// actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
};
const DEFAULT_STATE = {
  currentUser: null,
};
// value hold the actual user
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, DEFAULT_STATE);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListern((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  let value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserProvider;
