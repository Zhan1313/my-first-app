import React from "react";
import User from "./User";
import axios from "axios";
import styles from "./User.module.css";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let user = this.props.users.map(user => <User key={user.id} userId={user.id} photos={user.photos.small}
                                                 followed={user.followed} name={user.name}
                                                 status={user.status} location={user.location}
                                                 follow={this.props.follow} unfollow={this.props.unfollow}/>);
        return (
            <div>
                <div>
                    {pages.map(pageNumber => {
                        return <span onClick={(e) => {this.onPageChanged(pageNumber)}}
                                     className={this.props.currentPage === pageNumber && styles.selectedPage}>
                            {pageNumber}</span>
                    })}
                </div>
                {user}
            </div>
        )
    }
}

export default Users;