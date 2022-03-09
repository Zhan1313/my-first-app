import MyPosts from './My Posts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({postsData, addPost, newPostText, newPostChange}) => {
    return <div>
    <ProfileInfo/>
    <MyPosts postsData={postsData} addPost={addPost}
             newPostText={newPostText} newPostChange={newPostChange}/>
    </div>
}
export default Profile;