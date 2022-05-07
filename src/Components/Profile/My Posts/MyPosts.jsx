import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const MyPosts = ({postsData,onNewPostChange, addNewPost, newPostText}) => {
    let posts = postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let onAddNewPost = (formData) => {
        addNewPost(formData.postText);
    }
    let onNewPostTextChange = (e) => {
        let text = e.target.value;
        onNewPostChange(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddNewPost}/>
            <div className={s.item}>
                {posts}
            </div>
        </div>
    )
}

let maxLength10 = maxLengthCreator(10);

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'type post here...'} component={Textarea}
                       name={'postText'} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}
const AddPostForm = reduxForm({form: 'post'})(PostsForm);

export default MyPosts;