import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES, Category, CategoryItem } from "./category.types";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START>;
export type SetCategories = ActionWithPayload<CATEGORIES_ACTION_TYPES.SET_CATEGORIES, Category[]>;
export type FetchCategoriesSucess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, Category[]>;
export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, Error>;




export const setCategories = withMatcher((categories:Category[]):SetCategories => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories));

export const fetchCategoriesStart = withMatcher(():FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START));

export const fetchCategoriesSucess = withMatcher((categories:Category[]):FetchCategoriesSucess => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categories));

export const fetchCategoriesFailed = withMatcher((err:Error):FetchCategoriesFailed => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, err));

// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try{
//         const categoriesArray = await getCategoriesAndDocuments();
//         dispatch(fetchCategoriesSucess(categoriesArray));
//     } catch (err){
//         dispatch(fetchCategoriesFailed(err as Error));
//     }
// }