import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesFailed, fetchCategoriesSucess } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export function* fetchCategoriesAsync(){
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
        yield put(fetchCategoriesSucess(categoriesArray));
    } catch (err){
        yield put(fetchCategoriesFailed(err));
    }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START, fetchCategoriesAsync )
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)])
}

