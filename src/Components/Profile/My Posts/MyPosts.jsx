import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    let posts = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Post</button>
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