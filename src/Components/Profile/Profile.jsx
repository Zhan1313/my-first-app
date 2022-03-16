import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";


const Profile = ({store, dispatch}) => {
    let state = store.getState();

    return <div>
    <ProfileInfo/>
    <MyPostsContainer postsData={state.profilePage.postsData} dispatch={dispatch}
             newPostText={state.profilePage.newPostText} />
    </div>
}
export default Profile;