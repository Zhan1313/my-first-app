import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_AUTH_DATA = 'samurai-network/auth/SET_USER_AUTH_DATA';
const SET_AUTH_USER_PROFILE = 'samurai-network/auth/SET_AUTH_USER_PROFILE';

let initialState = {
    login: null,
    email: null,
    userId: null,
    isAuth: false,
    authProfile: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_AUTH_USER_PROFILE:
            return {
                ...state,
                authProfile: action.profile
            }
        default:
            return state;
    }
}
const setUserAuthData = (userId, email, login, isAuth) => ({
    type: SET_USER_AUTH_DATA,
    payload: {userId, email, login, isAuth}
});
const setAuthUserProfile = (profile) => ({type: SET_AUTH_USER_PROFILE, profile});
export const getUserAuthData = () => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setUserAuthData(id, email, login, true));
        authAPI.getAuthProfile(id).then(data => {
            dispatch(setAuthUserProfile(data));
        });
    }
};
export const login = (formData) => async (dispatch) => {
    let data = await authAPI.authLogin(formData);
    if (data.resultCode === 0) {
        dispatch(getUserAuthData());
    } else {
        let action = stopSubmit('login', {email: 'Email is incorrect'})
        dispatch(action);
    }
};
export const logout = () => async (dispatch) => {
    let data = await authAPI.authLogout();
    if (data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false));
    }
};
export default authReducer;