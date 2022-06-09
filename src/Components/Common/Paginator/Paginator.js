import React from "react";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
                {pages.map(pageNumber => {
                    return <span onClick={(e) => {
                        props.onPageChanged(pageNumber)
                    }} className={props.currentPage === pageNumber && styles.selectedPage}>
                            {pageNumber}</span>
                })}
            </div>
}
export default Paginator;