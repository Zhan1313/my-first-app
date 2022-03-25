import React from "react";
import styles from './User.module.css';
import avatarPicture from '../../Assets/images/avatarPicture.png';

const User = (props) => {
    return (
        <div>
            <span>
                <div>
                    <img src={ props.photos != null ? props.photos : avatarPicture} className={styles.avatarPhoto}/>
                </div>
                <div>
                    {
                        props.followed ? <button onClick={() => {
                                props.unfollow(props.userId)
                            }}>Unfollow</button>
                            : <button onClick={() => {
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