import React, {useState} from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage = 1, portionSize = 25}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const [currentPortion, setCurrentPortion] = useState(1);
    const portionLeftMarginPageNumber = (currentPortion - 1) * portionSize + 1;
    const portionRightMarginPageNumber = currentPortion * portionSize;

    let portionCount = pagesCount / portionSize

    return <div className={styles.paginator}>
        {currentPortion > 1 &&
        <button onClick={() => {setCurrentPortion(currentPortion - 1)}}>PREVIOUS</button>
        }
        {pages.filter(pageNumber => pageNumber >= portionLeftMarginPageNumber && pageNumber <= portionRightMarginPageNumber).map(pageNumber => {
            return <span onClick={(e) => {
                onPageChanged(pageNumber)
            }} className={currentPage === pageNumber && styles.selectedPage}>
                            {pageNumber}</span>
        })}
        { portionCount > currentPortion &&
            <button onClick={() => {setCurrentPortion(currentPortion + 1)}}>NEXT</button>
        }
    </div>
}
export default Paginator;