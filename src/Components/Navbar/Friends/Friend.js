import s from './NavBarFriends.module.css'
import {NavLink} from "react-router-dom";

const Friend = ({name}) => {
    return (
        <div>
            <div className={s.friendItem}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU'/>
            </div>
            <div>
                {name}
            </div>
        </div>
    )
}
export default Friend;