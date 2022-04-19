import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onNewPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addNewPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
