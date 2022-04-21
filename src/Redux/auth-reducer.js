const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

let initialState = {
    login: null,
    email: null,
    userId: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_AUTH_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setUserAuthData = (userId, email, login) => ({type: SET_USER_AUTH_DATA, data: {userId, email, login}});


export default authReducer;
