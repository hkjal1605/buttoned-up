import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { googleSigninSuccess, googleSigninFailure, emailSigninSuccess, emailSigninFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess } from './user.actions';

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(googleSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data()}))
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(googleSigninFailure(error));
    }
};

export function* signInWithEmail({ payload: { email, password }}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(emailSigninFailure(error));
    }
}

export function* isUserAuthenticated() {
    try{
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(emailSigninFailure(error));
    }
};

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutFailure(error))
    }
};

export function* signUp({ payload: { email, password, displayName }}) {
    try {
        const user = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName }}));
    } catch(error) {
        yield put(signUpFailure(error))
    }
};

export function* signInOnSignUp({ payload: { user, additionalData }}) {
    yield getSnapshotFromUserAuth(user.user, additionalData)
}

export function* onGoogleSigninStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle)
};

export function* onEmailSigninStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
};

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
};

export function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
};

export function* onSignUp() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
};

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInOnSignUp)
}

export function* userSaga() {
    yield all([call(onGoogleSigninStart), call(onEmailSigninStart), call(onCheckUserSession), call(onSignOut), call(onSignUp), call(onSignUpSuccess)]);
};

