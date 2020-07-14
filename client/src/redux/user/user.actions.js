import userActionTypes from './user.types';

export const googleSigninStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START
});

export const googleSigninSuccess = user => ({
    type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
    payload: user
});

export const googleSigninFailure = error => ({
    type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
    payload: error.message
});

export const emailSigninStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
});

export const emailSigninSuccess = user => ({
    type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
    payload: user
});

export const emailSigninFailure = error => ({
    type: userActionTypes.EMAIL_SIGNIN_FAILURE,
    payload: error.message
});

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = (userCredentials) => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials
});

export const signUpSuccess = ({user, additionalData}) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
});

export const signUpFailure = (error) => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
});

