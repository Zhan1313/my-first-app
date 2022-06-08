import React from "react";

export default ({user}) => {
    return (
        <div>
            <p>Selected user: <b>{user.name}</b></p>
            <p>Status: <b>{user.status ? user.status : 'No status'}</b></p>
            <p>Followed: <b>{user.followed ? 'Yes' : 'No'}</b></p>
            <p>Description <br/><textarea value={user.name}/></p>
        </div>
    )
}