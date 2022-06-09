import {profileAPI} from "../API/api";

const ADD_POST = 'samurai-network/profile/ADD_POST';
const DELETE_POST = 'samurai-network/profile/DELETE_POST';
const UPDATE_NEW_POST_TEXT = 'samurai-network/profile/UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'samurai-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'samurai-network/profile/SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello, how are you, mate?', likesCount: '345'},
        {id: 2, message: 'I am ok, how r u urself?', likesCount: '334'}
    ],
    newPostText: "",
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.postText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.postId)
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
}
export const addPostActionCreator = (postText) => ({type: ADD_POST, postText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId);
    dispatch(setStatus(data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        debugger;
        dispatch(setStatus(status));
    }
}

export default profileReducer;