import React from "react";
import User from "./User";

const Users = (props) => {
    let user = props.users.map(user => <User key={user.id} avatarUrl={user.avatarUrl}
                                             fullName={user.fullName} status={user.status} location={user.location}/>);
    return (
        <div>
            {user}
        </div>
    )
}
export default Users;