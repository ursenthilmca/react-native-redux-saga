import { loginWatchers } from "./modules/login/saga";
import { all } from 'redux-saga/effects';

export default function* rootWatchers() {
    yield all([loginWatchers()]);
}
