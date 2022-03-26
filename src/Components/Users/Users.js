import React from "react";
import User from "./User";
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }


    render() {
        let user = this.props.users.map(user => <User key={user.id} userId={user.id} photos={user.photos.small}
                                                 followed={user.followed} name={user.name}
                                                 status={user.status} location={user.location}
                                                 follow={this.props.follow} unfollow={this.props.unfollow}/>);
        return (
            <div>
                {user}
            </div>
        )
    }
}

export default Users;