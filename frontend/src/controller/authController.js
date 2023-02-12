import axios from "axios";
import {
        registerStart,
        registerSuccess,
        registerFailed,
        loginStart,
        loginSuccess,
        loginFailed,
        logoutSuccess,
} from "~/redux/slice/auth";

import {
        getMeStart,
        getMeSuccess,
        getMeFailed
} from "~/redux/slice/user";

const register = (info, navigate, dispatch) => {
        dispatch(registerStart());
        axios.post("/api/user/register", info)
                .then(({ data: { message } }) => {
                        navigate('/login');
                        dispatch(registerSuccess(message));
                })
                .catch((err) => {
                        dispatch(registerFailed(err.message))
                })
}

const login = (info, navigate, dispatch) => {
        dispatch(loginStart())
        axios.post("/api/user/login", info)
                .then(({ data }) => {
                        const { message, data: { accessToken } } = data;
                        dispatch(loginSuccess(message))
                        sessionStorage.setItem('accessToken', accessToken)
                        dispatch(getMeStart())
                        navigate('/');
                })
                .catch((err) => {
                        dispatch(loginFailed(err.message))
                })
}

const logout = async (dispatch) => {
        try {
                await dispatch(logoutSuccess());
                sessionStorage.clear();
                document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
                window.location.reload();
        } catch (err) {
                console.error("logout err", err.message)
        }

}

const getUser = async (dispatch) => {
        console.log('processing getUSer')
        try {
                dispatch(getMeStart())
                const accessToken = sessionStorage.getItem('accessToken') || null;
                if (!accessToken) {
                        return dispatch(getMeFailed())
                }

                axios.get('/api/user/getMe', {
                        headers: {
                                authorization: accessToken
                        }
                }).then(({ data: { data } }) => {
                        dispatch(getMeSuccess(data))
                })
        } catch (err) {
                console.log({ status: 'getUser failed', message: err.message })
                dispatch(getMeFailed())
        }
}

export {
        register,
        login,
        logout,
        getUser
}