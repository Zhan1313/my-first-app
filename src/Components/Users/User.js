import React from "react";
import styles from './User.module.css';
import avatarPicture from '../../Assets/images/avatarPicture.png';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followUnfollowAPI} from "../../API/api";

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
                        props.followed ? <button disabled={this.props.followingInProgress} onClick={() => {
                                this.props.setFollowingInProgress(true);
                                followUnfollowAPI.unfollow(props.userId).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(props.userId)
                                    }
                                    this.props.setFollowingInProgress(false);
                                })
                            }}>Unfollow</button>
                            : <button disabled={this.props.followingInProgress} onClick={() => {
                                this.props.setFollowingInProgress(true);
                                followUnfollowAPI.follow(props.userId).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(props.userId)
                                    }
                                    this.props.setFollowingInProgress(false);
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