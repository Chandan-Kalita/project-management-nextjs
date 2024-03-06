import { RootState } from "..";

export const getLoadingIndicatorStatus = (state: RootState) => state.commonStore.showLoadingIndicator
export const getToastInfo = (state: RootState) => state.commonStore.toastInfo