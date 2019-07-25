import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";

export function login() {
    console.log('====================================');
    console.log("====> action");
    console.log('====================================');
    return {
        type:LOGIN
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