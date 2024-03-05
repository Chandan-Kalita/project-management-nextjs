import { RootState } from "..";

export const getUserData = (state: RootState) => state.userStore.userData
export const getLoggedInStatus = (state: RootState) => state.userStore.loggedIn
export const getAuthLoading = (state: RootState) => state.userStore.isAuthLoading