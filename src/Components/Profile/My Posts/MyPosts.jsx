import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPosts = ({postsData,onNewPostChange, addNewPost, newPostText}) => {
    let posts = postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let onAddNewPost = () => {
        addNewPost();
    }
    let onNewPostTextChange = (e) => {
        let text = e.target.value;
        onNewPostChange(text);
    }
    let onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostsReduxForm onSubmit={onSubmit}/>
            <div className={s.item}>
                {posts}
            </div>
        </div>
    )
}
const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'type post here...'} component={'textarea'} name={'postText'}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
const PostsReduxForm = reduxForm({form: 'post'})(PostsForm);

export default MyPosts;