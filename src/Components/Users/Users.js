import React from "react";
import User from "./User";
import styles from "./User.module.css";
import Preloader from "../Common/Preloader/Preloader";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let user = props.users.map(user => <User key={user.id} userId={user.id} photos={user.photos.small}
                                             followed={user.followed} name={user.name}
                                             status={user.status} location={user.location}
                                             follow={props.follow} unfollow={props.unfollow}/>);
    return (
        <>
            <Preloader />
            <div>
                <div>
                    {pages.map(pageNumber => {
                        return <span onClick={(e) => {
                            props.onPageChanged(pageNumber)
                        }}
                                     className={props.currentPage === pageNumber && styles.selectedPage}>
                            {pageNumber}</span>
                    })}
                </div>
                <div>
                    {user}
                </div>
            </div>
        </>
    )
}
export default Users;