import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// this is the actual value we want to access.
export const UserContext = createContext({
    setCurrentUser:()=> null,
    currentUser:null, 
    
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
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