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
    },
    proposalList: any,
    proposalCount: number
}
const ProposalStore = createModel<RootModel>()({
    state: {
        submitCount: 0,
        createProposalMsg: {},
        proposalList: [],
        proposalCount: 0
    } as ProposalState,
    reducers: {
        setSubmitMsg: (state, payload) => {
            state.createProposalMsg = payload
            return state
        },
        setProposalList: (state, payload) => {
            state.proposalList = payload
            return state
        },
        setProposalCount: (state, payload) => {
            state.proposalCount = payload
            return state
        }
    },
    effects: (dispatch) => ({

        async submitProposal(payload, state) {
            try {
                const response = await axiosContainer.userAxios.post('/proposal', payload)
                let data = response.data;
                dispatch.proposalStore.setSubmitMsg({ status: true, msg: "Success" })
            } catch (error) {
                console.log(error);
                // if (error instanceof AxiosError) {
                //     if (error.response) {
                //         dispatch.proposalStore.setSubmitMsg({ status: false, msg: error.response.data.message })
                //     } else {
                //         dispatch.proposalStore.setSubmitMsg({ status: false, msg: error.message })
                //     }
                // } else {
                // }
                dispatch.proposalStore.setSubmitMsg({ status: false, msg: "Something went wrong" })
            }
        },

        async updateProposal(payload, state) {
            try {
                const response = await axiosContainer.userAxios.post('/proposal/update', payload)
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


        async reapplyProposal(payload, state) {
            try {
                const response = await axiosContainer.userAxios.post('/proposal/reapply', payload)
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

        async getProposals(payload, state) {
            try {
                const response = await axiosContainer.userAxios.post("/proposal/get", payload)
                let data = response.data;
                dispatch.proposalStore.setProposalList(data.proposals)
                dispatch.proposalStore.setProposalCount(data.count)
            } catch (error) {
                console.log(error);
            }
        },

    })
})

export default ProposalStore;