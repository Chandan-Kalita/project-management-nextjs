import { RootState } from "..";

export const getSubmitMsg = (state: RootState) => state.proposalStore.createProposalMsg
export const getProposals = (state: RootState) => state.proposalStore.proposalList
export const getProposalCount = (state: RootState) => state.proposalStore.proposalCount