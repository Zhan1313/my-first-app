import React from "react";
import styles from './User.module.css';
import avatarPicture from '../../Assets/images/avatarPicture.png';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : avatarPicture} className={styles.avatarPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {
                        props.user.followed ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                props.unfollow(props.user.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                                props.follow(props.user.id)
                            }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {props.user.name}
                    </div>
                    <div>
                        {props.user.status}
                    </div>
                </span>
                <span>
                    <div>
                        {'props.location.country'}
                    </div>
                    <div>
                        {'props.location.city'}
                    </div>
                </span>
            </span>
        </div>
    )
}
export default User;