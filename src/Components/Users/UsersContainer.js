import React from "react";
import {connect} from "react-redux";
import {
    follow,setCurrentPage, setFollowingInProgress,
    setIsFetching, setTotalUsersCount, setUsers, unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../API/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setIsFetching(false);
            });
    }

    onPageChanged = (page) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(page);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
            });
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                       setFollowingInProgress={this.props.setFollowingInProgress}
                       followingInProgress={this.props.followingInProgress}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, setFollowingInProgress })(UsersContainer);

/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}  */