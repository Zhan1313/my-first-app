import React from "react";
import User from "./User";
import axios from "axios";

const Users = (props) => {
    debugger;

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers();
        });

    }

    let user = props.users.map(user => <User key={user.id} userId={user.id} avatarUrl={user.avatarUrl}
                                             followed={user.followed} fullName={user.fullName}
                                             status={user.status} location={user.location}
                                             follow={props.follow} unfollow={props.unfollow}/>);
    return (
        <div>
            {user}
        </div>
    )
}
export default Users;