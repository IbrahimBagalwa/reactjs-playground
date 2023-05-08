import { takeLatest, call, all, put } from "typed-redux-saga/macro";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./categories.action";
import { getCategoriesAndDocuments } from "../../../utils/firebase.util";

export function* fetchCategoriesAsync() {
  try {
    const categoriesAr = yield* call(getCategoriesAndDocuments);
    //anytime you have a function and you want to turn as a side effect you essentialy want the keywords call
    yield* put(fetchCategoriesSuccess(categoriesAr));
    // put is our dispatch
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}
export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
  // is where we receive actions, takeLatest means if you hear a bunch of the same action, give me the latest one
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]); // all means run everything inside and only complete when all of it is done
}
