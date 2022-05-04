import {authAPI} from "../API/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE';

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
                ...action.data,
                isAuth: true
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

const setUserAuthData = (userId, email, login) => ({type: SET_USER_AUTH_DATA, data: {userId, email, login}});
const setAuthUserProfile = (profile) => ({type: SET_AUTH_USER_PROFILE, profile});
export const getUserAuthData = () => (dispatch) => {
    authAPI.getUserAuthData().then(data => {
        if (data.resultCode === 0) {
            let {id, email, login} = data.data;
            dispatch(setUserAuthData(id, email, login));
            authAPI.getAuthProfile(id).then(data => {
                dispatch(setAuthUserProfile(data));
            })
        }
    });
}
export const setAuthLogin = (formData) => (dispatch) => {
    authAPI.authLogin(formData).then(data => {
        if (data.resultCode === 0) {
            authAPI.getUserAuthData().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setUserAuthData(id, email, login));
                }
            });
        }
    })
}
export default authReducer;