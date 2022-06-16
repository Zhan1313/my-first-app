import React from "react";
import User from "./User";
import Paginator from "../Common/Paginator/Paginator";

const Users = (props) => {
    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            <div>
                {props.users.map(user => <User key={user.id} user={user}
                                               follow={props.follow} unfollow={props.unfollow}
                                               followingInProgress={props.followingInProgress}/>)}
            </div>
        </div>
    )
}
export default Users;