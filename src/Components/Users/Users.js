import React from "react";
import User from "./User";

const Users = (props) => {
    let user = props.users.map(user => <User key={user.id} useId={user.id} avatarUrl={user.avatarUrl}
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