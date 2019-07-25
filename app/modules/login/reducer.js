import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

const defaultState = {
    loginData:{}
}

export default (prevState = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log('====================================');
            console.log("====> reducer");
            console.log('====================================');
            return {
                ...defaultState,
                isLoading:true
            }
           
        case LOGIN_SUCCESS:
            return {
                ...prevState,
                loginData: action.loginData,
                isLoading:false
            }
           
        case LOGIN_FAILURE:
            return {
                ...prevState,
                error: action.error,
                isLoading: false
            }
            
        default:
            return {
                ...defaultState
            };
    }
}