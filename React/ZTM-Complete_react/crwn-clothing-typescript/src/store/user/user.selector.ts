import { createSelector } from "reselect";
import { UserStateD } from "./user.reducer";
import { RootState } from "../store";

export const selectUserReducer = (state:RootState):UserStateD => state.user;

export const selectCurrentUser = createSelector(selectUserReducer, (user) => user.currentUser);