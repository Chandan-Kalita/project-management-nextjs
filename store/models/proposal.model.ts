import { createModel } from "@rematch/core";
import { RootModel } from "..";
import axiosContainer from "../../utils/axios.service";
import { redirect } from "next/navigation";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { AxiosError } from "axios";
type ProposalState = {
    submitCount: 0,
    createProposalMsg: {
        status: boolean,
        msg: string
    }
}
const ProposalStore = createModel<RootModel>()({
    state: {
        submitCount: 0,
        createProposalMsg: {}
    } as ProposalState,
    reducers: {
        setSubmitMsg: (state, payload) => {
            state.createProposalMsg = payload
            return state
        },
    },
    effects: (dispatch) => ({

        async submitProposal(payload, state) {
            try {
                const response = await axiosContainer.post('/proposal', payload)
                let data = response.data;
                dispatch.proposalStore.setSubmitMsg({ status: true, msg: response.statusText })
            } catch (error) {
                console.log(error);
                if (error instanceof AxiosError) {
                    if (error.response) {
                        dispatch.proposalStore.setSubmitMsg({ status: false, msg: error.response.data.message })
                    } else {
                        dispatch.proposalStore.setSubmitMsg({ status: false, msg: error.message })
                    }
                } else {
                    dispatch.proposalStore.setSubmitMsg({ status: false, msg: "Something went wrong" })
                }
            }
        },

    })
})

export default ProposalStore;