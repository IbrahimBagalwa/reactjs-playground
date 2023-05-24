import { Middleware } from "redux";
import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
    console.log("Type: ", action.type);
    console.log("Payload: ", action.payload);
    console.log("CurrentState: ", store.getState());

    next(action);

    console.log("Next state: ", store.getState());
  };
