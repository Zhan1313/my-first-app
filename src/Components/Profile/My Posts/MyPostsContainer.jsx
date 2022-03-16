import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({postsData,dispatch, newPostText}) => {
    let addNewPost = () => {
        dispatch(addPostActionCreator());
    }
    let onNewPostChange = (text) => {
        dispatch(updateNewPostTextActionCreator(text));
    }
    return <MyPosts onNewPostChange={onNewPostChange} addNewPost={addNewPost}
                    postsData={postsData} newPostText={newPostText}/>
}
export default MyPostsContainer;