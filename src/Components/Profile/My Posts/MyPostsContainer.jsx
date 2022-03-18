import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().profilePage;
            let addNewPost = () => {
                store.dispatch(addPostActionCreator());
            }
            let onNewPostChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            }
            return <MyPosts onNewPostChange={onNewPostChange} addNewPost={addNewPost}
                            postsData={state.postsData} newPostText={state.newPostText}/>
        }
        }
    </StoreContext.Consumer>
}
export default MyPostsContainer;