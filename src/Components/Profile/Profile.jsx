import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import ProfileStatus from "./ProfileInfo/ProfileStatus";


const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <ProfileStatus status={'Kalaisn bro'}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;