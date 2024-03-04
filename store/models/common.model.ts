import {createModel} from "@rematch/core";
import { RootModel } from "..";
// import {RootModel} from "@store";
const CommonStore = createModel<RootModel>()({
    state:{
        showLoadingIndicator : false 
    } as any,
    reducers:{
        setShowLoadingIndicator: (state,payload)=>{
            state.showLoadingIndicator = payload
            return state
        }
    },
    effects: (dispatch)=>({
        
    })
})

export default CommonStore;