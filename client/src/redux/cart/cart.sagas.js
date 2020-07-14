import { all, call, put, takeLatest } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';

import { ClearCart } from './cart.actions';

export function* clearCartOnSignOut() {
    yield put(ClearCart())
};

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
};

export function* cartSaga() {
    yield all([call(onSignOutSuccess)])
};