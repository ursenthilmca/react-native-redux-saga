import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";

export function login(data) {
    return {
        type:LOGIN,
        data
    }
}

export function loginSuccess(loginData) {
    return {
        type: LOGIN_SUCCESS,
        loginData
    }
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    }
}