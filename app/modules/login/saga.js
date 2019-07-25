import { put, takeEvery, delay } from "redux-saga/effects";
import * as actions from "./actions";
import { LOGIN } from "./constants";


function* loginActon() {
    const success = { success:"login success"};
    yield delay(2000);
    yield put(actions.loginSuccess(success));
}


export function* loginWatchers() {
    yield takeEvery(LOGIN, loginActon);
}
