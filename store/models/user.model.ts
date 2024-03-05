import { createModel } from "@rematch/core";
import { RootModel } from "..";
import axiosContainer from "../../utils/axios.service";
import { redirect } from "next/navigation";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
type User = {
    token: string,
    isAuthLoading: boolean,
    loggedIn: boolean,
    userData: {
        id: string,
        email: string,
        phoneNumber?: string,
        name?: string,
    } | null
}
const UserStore = createModel<RootModel>()({
    state: {
        userData: {
            id: "",
            email: "",
            phoneNumber: "",
            name: "",
        },
        token: "",
        loggedIn: false,
        isAuthLoading: true,
    } as User,
    reducers: {
        setUser: (state, payload) => {
            state.userData = payload
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
        }
    },
    effects: (dispatch) => ({
        async register(payload, state) {
            try {
                const response = await axiosContainer.post('/user', payload)
                const token = response.data.access_token;
                setCookie('userToken', token);
                dispatch.userStore.setToken(token);
                dispatch.userStore.setLoggedIn(true);
            } catch (error) {
                console.log(error);
            }
        },
        async login(payload, state) {
            try {
                const response = await axiosContainer.post('/user/sign-in', payload)
                const token = response.data.access_token;
                setCookie('userToken', token);
                dispatch.userStore.setToken(token);
                dispatch.userStore.setLoggedIn(true);
            } catch (error) {
                console.log(error);
            }
        },

        async verifyToken(payload, state) {
            try {
                let token = getCookie("userToken");
                const response = await axiosContainer.get('/user/authorize', { params: { token } })
                let data = response.data;
                if (data.id) {
                    dispatch.userStore.setIsAuthLoading(false);
                }
                dispatch.userStore.setToken(token);
                dispatch.userStore.setLoggedIn(true);
                dispatch.userStore.setUser(data);
            } catch (error) {
                console.log(error);
                dispatch.userStore.setIsAuthLoading(true);
                dispatch.userStore.setLoggedIn(false);
            }
        },

        async logout() {
            dispatch.userStore.setUser(null)
            deleteCookie('userToken');
            dispatch.userStore.setToken("")
            dispatch.userStore.setLoggedIn(false);

        }
    })
})

export default UserStore;