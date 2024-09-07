import { takeLatest, all, call, put, CallEffect, PutEffect } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesFailed, fetchCategoriesSucess } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { Category } from "./category.types";

type FetchCategoriesAsyncReturn = Generator<
  CallEffect<Category[]> | PutEffect,
  void,
  Category[]
>;


export function* fetchCategoriesAsync():FetchCategoriesAsyncReturn{
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSucess(categoriesArray));
    } catch (err){
        yield put(fetchCategoriesFailed(err as Error));
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START, fetchCategoriesAsync )
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)])
}

