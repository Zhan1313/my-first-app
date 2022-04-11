import React from "react";
import User from "./User";
import styles from "./User.module.css";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let user = props.users.map(user => <User key={user.id} userId={user.id} photos={user.photos.small}
                                                  followed={user.followed} name={user.name}
                                                  status={user.status} location={user.location}
                                                  follow={props.follow} unfollow={props.unfollow}/>);
    return (
        <div>
            <div>
                {pages.map(pageNumber => {
                    return <span onClick={(e) => {props.onPageChanged(pageNumber)}}
                                 className={props.currentPage === pageNumber && styles.selectedPage}>
                            {pageNumber}</span>
                })}
            </div>
            {user}
        </div>
    )
}
export default Users;