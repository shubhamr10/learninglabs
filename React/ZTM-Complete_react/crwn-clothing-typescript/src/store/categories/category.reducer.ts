import { Category } from "./category.types";
import { fetchCategoriesStart, fetchCategoriesSucess, fetchCategoriesFailed } from "./category.action";
import { UnknownAction } from "redux";

export type CategoryState = {
    readonly categories: Category[];
    readonly isLoading:boolean;
    readonly error: Error | null;
}


const CATEGORIES_INITIAL_STATE: CategoryState = {
    categories:[],
    isLoading:false,
    error : null
}


export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as UnknownAction):CategoryState => {

    if(fetchCategoriesStart.match(action)){
        return {...state, isLoading: true};
    }

    if(fetchCategoriesSucess.match(action)){
        return { ...state, categories: action.payload, isLoading: false}
    }

    if(fetchCategoriesFailed.match(action)){
        return { ...state, error: action.payload, isLoading: false}
    }

    return state;
    
    // switch(action.type){
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START:
    //         return {...state, isLoading: true};
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS:
    //         return { ...state, categories: action.payload, isLoading: false}
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED:
    //         return { ...state, error: action.payload, isLoading: false}
    //     default:
    //         return state;
    // }
}