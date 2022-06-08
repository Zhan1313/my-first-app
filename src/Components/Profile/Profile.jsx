import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import ProfileStatus from "./ProfileInfo/ProfileStatus";
import ProfilelStatusWithHooks from "./ProfileInfo/ProfileStatusWithHooks";


const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <ProfilelStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
}
export default Profile;

