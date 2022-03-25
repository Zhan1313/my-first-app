import React from "react";
import User from "./User";
import axios from "axios";

const Users = (props) => {
    debugger;
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
        }
    }

    let user = props.users.map(user => <User key={user.id} userId={user.id} photos={user.photos.small}
                                             followed={user.followed} name={user.name}
                                             status={user.status} location={user.location}
                                             follow={props.follow} unfollow={props.unfollow}/>);
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {user}
        </div>
    )
}
export default Users;