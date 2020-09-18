import axios from 'axios'
import Router from 'next/router'
import {all, call, put, fork, takeLatest} from 'redux-saga/effects'
import {LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE} from '../reducers/user'

function loginAPI(loginData){
    return axios.post('/api/user/login', loginData, {
        withCredentials:true,
    });
}

function signUpAPI(signUpData){
    return axios.post('/api/user/', signUpData);
}

function* login(action){
    try{
        const result = yield call(loginAPI, action.data);
        yield put({
            type:LOG_IN_SUCCESS,
            data:result.data
        });
    }catch(err){
        console.error(err);
        yield put({
            type:LOG_IN_FAILURE,
        });
    }
}


function* signUp(action){
    try{
        yield call(signUpAPI, action.data);
        yield put({
            type:SIGN_UP_SUCCESS,
        });
        Router.push('/login');
    }catch(err){
        console.error(err);
        yield put({
            type:SIGN_UP_FAILURE,
        });
    }
}

function* watchLogin(){
    yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchSignUp(){
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
    ]);
}