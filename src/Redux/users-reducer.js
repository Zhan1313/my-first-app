import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../Utils/object-helpers";

const FOLLOW = 'samurai-network/úsers/FOLLOW';
const UNFOLLOW = 'samurai-network/úsers/UNFOLLOW';
const SET_USERS = 'samurai-network/úsers/SET_USERS';
const SET_CURRENT_PAGE = 'samurai-network/úsers/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'samurai-network/úsers/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'samurai-network/úsers/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'samurai-network/úsers/TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.userId, {followed: false})
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

const followSuccess = (userId) => ({type: FOLLOW, userId});
const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
const setUsers = (users) => ({type: SET_USERS, users});
const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setIsFetching(false));
}
const followUnfollowFlow = async (userId, dispatch, apiMethod, actionCreator) => {
    dispatch(setFollowingInProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setFollowingInProgress(false, userId));
}
export const unfollow = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI);
    followUnfollowFlow(userId, dispatch, apiMethod, unfollowSuccess)
}
export const follow = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI);
    followUnfollowFlow(userId, dispatch, apiMethod, followSuccess)
}

export default usersReducer;

