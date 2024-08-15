import { createContext, useEffect, useState, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { USER_ACTION_TYPES } from "../store/user/user.types";
// this is the actual value we want to access.
export const UserContext = createContext({
    setCurrentUser:()=> null,
    currentUser:null, 
    
});




const userReducer = (state, action) => {
    const { type, payload } = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:payload,
            }
            
        default:
            throw new Error(`unhandled type ${type} in the userReducer`);
    }

}

const INITIAL_STATE = {
    currentUser:null,
}


export const UserProvider = ({children}) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;
    console.log(currentUser);
    const setCurrentUser = (user) => {
        dispatch({
            type:USER_ACTION_TYPES.SET_CURRENT_USER,
            payload: user
        })
    }
    const value = {currentUser, setCurrentUser}
    
    useEffect(() => {
        const unSubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unSubscribe
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}