import axios from 'axios'
import Router from 'next/router'
import {all, call, put, fork, takeLatest} from 'redux-saga/effects'
import {WRITE_POST_REQUEST} from '../reducers/post'

function createAPI(createData){
    return axios.post('/api/post/', createData, {
        withCredentials:true,
    });
}

function readAPI(readData){
    return axios.get('/api/user/', readData);
}

function* create(action){
    try{
        const result = yield call(createAPI, action.data);
        yield put({
            type:WRITE_POST_SUCCESS,
            data:result.data,
        });
    }catch(err){
        console.error(err);
        yield put({
            type:WRITE_POST_FAILURE,
        });
    }
}


function* read(action){
    try{
        yield call(readAPI, action.data);
        yield put({
            type:LOAD_POST_SUCCESS,
        });
    }catch(err){
        console.error(err);
        yield put({
            type:LOAD_POST_FAILURE,
        });
    }
}

function* watchCreate(){
    yield takeLatest(WRITE_POST_REQUEST, create);
}

function* watchRead(){
    yield takeLatest(LOAD_POST_REQUEST, read);
}

export default function* postSaga(){
    yield all([
        fork(watchCreate),
        fork(watchRead),
    ]);
}