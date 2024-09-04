import { UnknownAction } from "redux"


// type which contains action and payload
export type ActionWithPayload<T, P> = {
    type:T;
    payload:P;
}

export type Action<T> = {
    type:T;
}

// overload function using signatures
export function createAction<T extends string, P>(type:T, payload:P):ActionWithPayload<T,P>;
export function createAction<T extends string>(type:T, payload:void):Action<T>;

// function defination
export function createAction<T extends string, P>(type:T, payload:P){
    return {
        type, 
        payload
    }
}

