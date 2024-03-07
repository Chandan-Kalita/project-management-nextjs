import { createModel } from "@rematch/core";
import { RootModel } from "..";
import axiosContainer from "../../utils/axios.service";
import { redirect } from "next/navigation";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
type Admin = {
    adminData: {
        id: string,
        email: string,
    } | null,
    token: string,
    isAuthLoading: boolean,
    loggedIn: boolean,
    proposalCounts: {ACCEPTED:number, REJECTED:number, PENDING:number, ALL:number},
    proposalList: any,
    proposalCount: number,
    proposalStatusChanged:{status:boolean, msg:string},
}
const AdminStore = createModel<RootModel>()({
    state: {
        adminData: {
            id: "",
            email: "",
        },
        token: "",
        loggedIn: false,
        isAuthLoading: true,
        proposalCounts:{ACCEPTED:0,REJECTED:0,PENDING:0,ALL:0},
        proposalList: [],
        proposalCount: 0,
        proposalStatusChanged:{status:false, msg:""},
    } as Admin,
    reducers: {
        setAdmin: (state, payload) => {
            state.adminData = payload
            return state
        },
        setToken: (state, payload) => {
            state.token = payload
            return state
        },
        setLoggedIn: (state, payload) => {
            state.loggedIn = payload
            return state
        },
        setIsAuthLoading: (state, payload) => {
            state.isAuthLoading = payload
            return state
        },
        setProposalCounts: (state, payload)=>{
            state.proposalCounts = payload
            return state
        },
        setProposalList: (state, payload) => {
            state.proposalList = payload
            return state
        },
        setProposalCount: (state, payload) => {
            state.proposalCount = payload
            return state
        },
        setProposalStatusChanged:(state,payload)=>{
            state.proposalStatusChanged = payload
            return state
        }
    },
    effects: (dispatch) => ({
        async login(payload, state) {
            try {
                const response = await axiosContainer.adminAxios.post('/user/sign-in', payload)
                const token = response.data.access_token;
                setCookie('adminToken', token);
                dispatch.adminStore.setToken(token);
                dispatch.adminStore.setLoggedIn(true);
            } catch (error) {
                console.log(error);
            }
        },

        async verifyToken(payload, state) {
            try {
                let token = getCookie("adminToken");
                const response = await axiosContainer.adminAxios.get('/user/authorize', { params: { token } })
                let data = response.data;
                if (data.id && data.userType == "ADMIN") {
                    dispatch.adminStore.setIsAuthLoading(false);
                }
                dispatch.adminStore.setToken(token);
                dispatch.adminStore.setLoggedIn(true);
                dispatch.adminStore.setAdmin(data);
            } catch (error) {
                console.log(error);
                dispatch.adminStore.setIsAuthLoading(true);
                dispatch.adminStore.setLoggedIn(false);
            }
        },

        async logout() {
            dispatch.adminStore.setAdmin(null)
            deleteCookie('adminToken');
            dispatch.adminStore.setToken("")
            dispatch.adminStore.setLoggedIn(false);

        },
        async getProposalCounts(){
            try {
                const response = await axiosContainer.adminAxios.get('/proposal/get-proposal-counts')
                const data = response.data
                dispatch.adminStore.setProposalCounts(data)
            } catch (error) {
                
            }
        },
        async getProposals(payload, state) {

            try {
                dispatch.adminStore.setProposalList([])
                dispatch.adminStore.setProposalCount(0)
                const response = await axiosContainer.adminAxios.post("/proposal/get", payload)
                let data = response.data;
                dispatch.adminStore.setProposalList(data.proposals)
                dispatch.adminStore.setProposalCount(data.count)
            } catch (error) {
                console.log(error);
            }
        },

        async submitProposalStatus(payload, state){
            try {
                dispatch.adminStore.setProposalStatusChanged({status:false, msg:""})
                const response = await axiosContainer.adminAxios.post("/proposal/change-status", payload)
                let data = response.data;
                dispatch.adminStore.setProposalStatusChanged({status:true, msg:"Status updated successfully"})
            } catch (error) {
                console.log(error);
                dispatch.adminStore.setProposalStatusChanged({status:true, msg:"Status update failed"})
            }
        }
    })
})

export default AdminStore;