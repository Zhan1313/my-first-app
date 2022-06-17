import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactPaginate from "react-paginate";
import Loader from "../Common/Preloader/Loader";
import TableItself from "./TableItself";
import _ from "lodash";
import DetailedUserRowView from "./DetailedUserRowView/DetailedUserRowView";
import ModeSelector from "./ModeSelector/ModeSelector";

class Table extends React.Component {
    state = {
        isModeSelected: false,
        isFetching: false,
        data: [],
        sortType: 'asc', // decs
        sortField: 'id',
        userRow: null,
        totalUsersCount: 0
    }
    async fetchData(url) {
        const response = await fetch(url);
        const usersData = await response.json();
        this.setState({
            isFetching: false,
            data:_.orderBy(usersData.items, this.state.sortField, this.state.sortType),
            totalUsersCount: usersData.totalUsersCount
        })
    }
    onSort = sortField => {
        const clonedData = this.state.data.concat()
        const toggleSortType = this.state.sortType === 'asc' ? 'desc' : 'asc'
        const orderedData = _.orderBy(clonedData, sortField, toggleSortType)
        this.setState({
            data: orderedData,
            sortType: toggleSortType,
            sortField
        })
    }
    onRowSelect = userRow => {
        this.setState({userRow})
    }
    onSelectHandler = url => {
        this.setState({
            isModeSelected: true,
            isFetching: true
        })
        this.fetchData(url);
    }
    pageChangeHandler = page => {
        console.log(page);
    }

    render() {
        const pageSize = 2;

        if (!this.state.isModeSelected) {
            return <ModeSelector onSelect={this.onSelectHandler}/>
        }

        return (
            <div className='container'>
                {
                    this.state.isFetching
                        ? <Loader/>
                        : <TableItself usersData={this.state.data} onSort={this.onSort}
                                       sortField={this.state.sortField} sortType={this.state.sortType}
                                       onRowSelect={this.onRowSelect}/>
                }
                {
                    this.state.data.length > pageSize
                    ? <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={this.pageChangeHandler}
                            pageRangeDisplayed={5}
                            pageCount={Math.ceil(this.state.totalUsersCount/pageSize)}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-item'
                            previousLinkClassName='page-link'
                            nextClassName='page-item'
                            nextLinkClassName='page-link'

                        /> : null
                }
                {
                    this.state.userRow
                        ? <DetailedUserRowView user={this.state.userRow}/>
                        : null
                }
            </div>
        )
    }
}

export default Table;