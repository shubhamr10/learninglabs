import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (categories) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START);

export const fetchCategoriesSucess = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categories);

export const fetchCategoriesFailed = (err) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, err);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try{
        const categoriesArray = await getCategoriesAndDocuments("categories");
        dispatch(fetchCategoriesSucess(categoriesArray));
    } catch (err){
        dispatch(fetchCategoriesFailed(err));
    }
}