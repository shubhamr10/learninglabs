import { UserData } from "./user.types";
import { UnknownAction } from "redux";
import { signInSucess, signInFailed, signUpFailed, signOutFailed, signOutSuccess } from "./user.action";

export type UserStateD = {
    readonly currentUser:null | UserData;
    readonly isLoading:boolean;
    readonly error: null | Error;
}

const INITIAL_STATE: UserStateD = {
    currentUser:null,
    isLoading:false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action = {} as UnknownAction):UserStateD => {
   if(signInSucess.match(action)){
    return {
        ...state,
        currentUser:action.payload,
        isLoading:false
    }
   }

   if(signInFailed.match(action) || signUpFailed.match(action) || signOutFailed.match(action)){
    return {
        ...state,
        error: action.payload,
        isLoading:false
    }
   }

   if(signOutSuccess.match(action)){
    return {
        ...state,
        currentUser:null,
        isLoading:false
    }
   }

    return state;


    // switch(type){
    //     case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser:payload,
    //             isLoading:false
    //         }
    //     case USER_ACTION_TYPES.SIGN_UP_FAILED:
    //     case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    //     case USER_ACTION_TYPES.SIGN_IN_FAILED:
    //         return {
    //             ...state,
    //             error: payload,
    //             isLoading: false
    //         }
    //     case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser:null
    //         }
        
            
    //     default:
    //         return state
    // }

}

