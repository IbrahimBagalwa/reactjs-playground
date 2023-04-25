import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const DEFAULT_STATE = {
  categoriesArray: [],
};
export const categoriesReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categoriesArray: payload };
    default:
      return state;
  }
};
