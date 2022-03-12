import MyPosts from './My Posts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({postsData, dispatch, newPostText}) => {
    return <div>
    <ProfileInfo/>
    <MyPosts postsData={postsData} dispatch={dispatch}
             newPostText={newPostText} />
    </div>
}
export default Profile;