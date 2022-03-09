import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";

const MyPosts = ({postsData,addPost, newPostText, newPostChange}) => {
    let posts = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();
    let addNewPost = () => {
        addPost();
    }
    let onNewPostChange = () => {
        let text = newPostElement.current.value;
        newPostChange(text);
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