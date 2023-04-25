export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(store);
  }
  console.log("Type: ", action.type);
  console.log("Payload: ", action.payload);
  console.log("CurrentState: ", store.getState());

  next(action);

  console.log("Next state: ", store.getState());
};
