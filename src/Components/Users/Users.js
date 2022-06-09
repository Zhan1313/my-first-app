import React from "react";
import User from "./User";
import Paginator from "../Common/Paginator/Paginator";

const Users = (props) => {
    debugger;
    let user = props.users.map(user => <User key={user.id} userId={user.id} photos={user.photos.small}
                                             followed={user.followed} name={user.name}
                                             status={user.status} location={user.location}
                                             follow={props.follow} unfollow={props.unfollow}
                                             followingInProgress={props.followingInProgress}/>);
    return (
        <div>
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            <div>
                {user}
            </div>
        </div>
    )
}
export default Users;