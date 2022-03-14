import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

const MyPosts = ({postsData,dispatch, newPostText}) => {
    let posts = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();
    let addNewPost = () => {
        dispatch(addPostActionCreator());
    }
    let onNewPostChange = () => {
        let text = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} value={newPostText} onChange={onNewPostChange}/>
                <div>
                    <button onClick={ addNewPost }>Add Post</button>
                    <button>Remove Post</button>
                </div>
            </div>
            <div className={s.item}>
                {posts}
            </div>
        </div>
    )
}
export default MyPosts;