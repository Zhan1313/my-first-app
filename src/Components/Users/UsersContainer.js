import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unfollowAC} from "../../Redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);