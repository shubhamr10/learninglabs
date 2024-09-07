import { takeLatest, call, all, put, CallEffect, PutEffect } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSucess, signInFailed, signUpSuccess, signUpFailed, signOutSuccess, signOutFailed } from "./user.action";
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, SignOutUser } from "../../utils/firebase/firebase.utils";
import { AdditionalInformation } from "../../utils/firebase/firebase.utils";
import { User, UserCredential } from "firebase/auth";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { UserData } from "./user.types";
import { EmailSignInStart, SignUpStart, SignUpSuccess } from "./user.action";

type GetSnapshotFromUserAuth = Generator<
  CallEffect | PutEffect,
  void,
  QueryDocumentSnapshot<UserData>
>;


export function* getSnapshotFromUserAuth(userAuth:User, additionalDetails?:AdditionalInformation):GetSnapshotFromUserAuth{
    try{
        const userSnapShot:QueryDocumentSnapshot<UserData> = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSucess({id: userSnapShot.id, ...userSnapShot.data()}))
    } catch (error) {
        yield put(signInFailed(error as Error))
    }
}

export function* signInWithGoogle(){
    try{
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (err){
        yield put(signInFailed(err as Error))
    }
}


export function* signInWithEmail({payload: {email, password}}:EmailSignInStart){
    try{
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (err){
        yield put(signInFailed(err as Error))
    }
}


export function* signUp({payload:{email, password, displayName}}:SignUpStart){
    try{
        const userCredentials:UserCredential = yield call(createAuthUserWithEmailAndPassword, email, password)
        yield put(signUpSuccess( userCredentials.user,  { displayName }))
    } catch (err) {
        yield put(signUpFailed(err as Error));
    }
}

export function* signInAfterSignUp({ payload : { user, additionalDetails } }:SignUpSuccess){
    try{
        yield call(getSnapshotFromUserAuth, user, additionalDetails);
    } catch (err){
        yield put(signInFailed(err as Error))
    }
}

export function* signOut(){
    try{
        yield call(SignOutUser);
        yield put(signOutSuccess());
    } catch(err){
        yield put(signOutFailed(err as Error));
    }
}

export function* isUserAuthenticated():Generator<CallEffect | PutEffect | CallEffect<void>, void, User>{
    try{
        const userAuth:User | null = yield call(getCurrentUser);
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (err){
        yield put(signInFailed(err as Error))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onEmailSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart(){
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas(){
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignUpStart), call(onSignUpSuccess), call(onSignOutStart)])
}