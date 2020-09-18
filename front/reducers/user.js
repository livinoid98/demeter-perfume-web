export const initialState = {
    userInfo: null,
    isLoggingIn: false,
    isLoggingOut: false,
    isLogged:false,
    loginErrorReason: '',
    signedUp: false,
    isSigningUp: false,
    signUpErrorReason: '',
};

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUpRequestAction = () => ({
    type: SIGN_UP_REQUEST,
});

export const loginRequestAction = (data) => ({
    type: LOG_IN_REQUEST,
    userInfo: data,
});

export const logoutRequestAction = () => ({
    type: LOG_OUT_REQUEST,
});

const reducer = (state=initialState , action) => {
    switch(action.type){
        case LOG_IN_REQUEST:{
            return{
                ...state,
                isLoggingIn:true,
            }
        }
        case LOG_IN_SUCCESS:{
            return{
                ...state,
                isLoggingIn:false,
                isLogged:true,
                userInfo: action.data,
            }
        }
        case LOG_IN_FAILURE:{
            return{
                ...state,
                isLoggingIn:false,
                loginErrorReason:action.error,
                userInfo:null,
            }
        }
        case SIGN_UP_REQUEST:{
            return{
                ...state,
                isSigningUp:true,
            }
        }
        case SIGN_UP_SUCCESS:{
            return{
                ...state,
                isSigningUp:false,
            }
        }
        case SIGN_UP_FAILURE:{
            return{
                ...state,
                isSigningUp:false,
                signUpErrorReason:action.error,
            }
        }
        default:{
            return{
                ...state,
            }
        }
    }
}

export default reducer;