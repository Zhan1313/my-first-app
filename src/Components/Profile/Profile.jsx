import MyPosts from './My Posts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = ({postsData}) => {
    return <div>
    <ProfileInfo/>
    <MyPosts postsData={postsData}/>
    </div>
}
export default Profile;