import React from "react";
import styles from './User.module.css';
import avatarPicture from '../../Assets/images/avatarPicture.png';
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                        props.followed ? <button onClick={() => {

                                props.unfollow(props.userId)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {}, {
                                    withCredentials: true
                                })
                                    .then(response => {
                                        debugger;
                                        if (response.data.resultCode === 0) {
                                            props.follow(props.userId)
                                        }

                                    })
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