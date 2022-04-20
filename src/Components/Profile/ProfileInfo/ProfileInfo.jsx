import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import LookingForJob from '../../../Assets/images/lookingForAJob.png'
import NotLookingForJob from '../../../Assets/images/notLookingForAJob.jpg'

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
            <div>
                {props.profile.fullName}
            </div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>
            <div>
                {props.profile.aboutMe}
            </div>
            <div>
                {props.profile.lookingForAJob ? <img
                    src={LookingForJob}/> : <img src={NotLookingForJob}/>}
            </div>
            <div>
                {props.profile.lookingForAJobDescription}
            </div>

        </div>
    </div>
}
export default ProfileInfo;
