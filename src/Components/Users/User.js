import React from "react";
import styles from './User.module.css';
import avatarPicture from '../../Assets/images/avatarPicture.png';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/api";

const User = (props) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'profile/' + props.userId}>
                        <img src={props.photos != null ? props.photos : avatarPicture} className={styles.avatarPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {
                        props.followed ? <button disabled={props.followingInProgress.some(id => id === props.userId)} onClick={() => {
                                props.unfollow(props.userId)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.userId)} onClick={() => {
                                props.follow(props.userId)
                            }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {props.name}
                    </div>
                    <div>
                        {props.status}
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