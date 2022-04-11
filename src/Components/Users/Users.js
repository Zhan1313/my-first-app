import React from "react";
import User from "./User";
import styles from "./User.module.css";

const Users = (props) => {
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
export default Users;