import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import LookingForJob from '../../../Assets/images/lookingForAJob.png';
import NotLookingForJob from '../../../Assets/images/notLookingForAJob.jpg';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div className={s.profilePicture}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8elXVuXaPtlBNW136vDKrASrUUZMdbJM9jA&usqp=CAU'/>
        </div>
        <div>
            <div className={s.fullName}>
                {props.profile.fullName}
            </div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={s.aboutMe}>
                {props.profile.aboutMe}
            </div>
            <div>
                {props.profile.lookingForAJob ? <img
                    src={LookingForJob}/> : <img src={NotLookingForJob}/>}
            </div>
            <div>
                {props.profile.lookingForAJobDescription}
            </div>
            <div>
                <div>
                    <p>You can reach me at</p>
                </div>
                <div>
                    <div>
                        <span className={s.contacts}>facebook:    {props.profile.contacts.facebook}</span>
                        <span className={s.contacts}>website:     {props.profile.contacts.website}</span>
                    </div>
                    <div>
                        <span className={s.contacts}>vk:          {props.profile.contacts.vk}</span>
                        <span className={s.contacts}>twitter:     {props.profile.contacts.twitter}</span>
                    </div>
                    <div>
                        <span className={s.contacts}>instagram:    {props.profile.contacts.instagram}</span>
                        <span className={s.contacts}>youtube:      {props.profile.contacts.youtube}</span>
                    </div>
                    <div>
                        <span className={s.contacts}>github:       {props.profile.contacts.github}</span>
                        <span className={s.contacts}>mainLink:     {props.profile.contacts.mainLink}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default ProfileInfo;