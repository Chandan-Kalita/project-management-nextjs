import { RootState } from "..";

export const getAdminData = (state: RootState) => state.adminStore.adminData
export const getLoggedInStatus = (state: RootState) => state.adminStore.loggedIn
export const getAuthLoading = (state: RootState) => state.adminStore.isAuthLoading
export const getProposalCounts = (state: RootState) => state.adminStore.proposalCounts