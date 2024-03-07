import { RootState } from "..";

export const getAdminData = (state: RootState) => state.adminStore.adminData
export const getLoggedInStatus = (state: RootState) => state.adminStore.loggedIn
export const getAuthLoading = (state: RootState) => state.adminStore.isAuthLoading
export const getProposalCounts = (state: RootState) => state.adminStore.proposalCounts

export const getProposals = (state: RootState) => state.adminStore.proposalList
export const getProposalCount = (state: RootState) => state.adminStore.proposalCount
export const getProposalStatusChanged = (state: RootState) => state.adminStore.proposalStatusChanged