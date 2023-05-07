import { CategoryActions } from "./categories.action";
import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";

export type CategoriesState = {
  readonly categoriesArray: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};
const DEFAULT_STATE: CategoriesState = {
  categoriesArray: [],
  isLoading: false,
  error: null,
};
export const categoriesReducer = (
  state = DEFAULT_STATE,
  action = {} as CategoryActions
) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesArray: action.payload, isLoading: false };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
