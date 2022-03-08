import MyPosts from './My Posts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({postsData, addPost}) => {
    return <div>
    <ProfileInfo/>
    <MyPosts postsData={postsData} addPost={addPost}/>
    </div>
}
export default Profile;