import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";

const MyPosts = ({postsData,onNewPostChange, addNewPost, newPostText}) => {
    let posts = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddNewPost = () => {
        addNewPost();
    }
    let onNewPostTextChange = (e) => {
        let text = e.target.value;
        onNewPostChange(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={newPostText} onChange={onNewPostTextChange}/>
                <div>
                    <button onClick={ onAddNewPost }>Add Post</button>
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