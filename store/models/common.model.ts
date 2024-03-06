import { createModel } from "@rematch/core";
import { RootModel } from "..";
// import {RootModel} from "@store";
const CommonStore = createModel<RootModel>()({
    state: {
        showLoadingIndicator: false,
        toastInfo: {
            open: false,
            msg: ""
        }
    } as any,
    reducers: {
        setShowLoadingIndicator: (state, payload) => {
            state.showLoadingIndicator = payload
            return state
        },
        setToastInfo: (state, payload) => {
            state.toastInfo.open = payload.open
            state.toastInfo.msg = payload.msg
        }
    },
    effects: (dispatch) => ({
        showToastEffect: (payload, state) => {
            console.log(payload);

            dispatch.commonStore.setToastInfo(payload)
        }
    })
})

export default CommonStore;