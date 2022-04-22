const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
        case SET_USER_PROFILE:
            return {
                ...state,
                authProfile: action.profile
            }
        default:
            return state;
    }
}

export const setUserAuthData = (userId, email, login) => ({type: SET_USER_AUTH_DATA, data: {userId, email, login}});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export default authReducer;
