import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";

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
            <img src={props.profile.photos.large}/>
            ava + description
        </div>
    </div>
}
export default ProfileInfo;