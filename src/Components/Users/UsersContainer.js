import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../Redux/users-reducer";
import Users from "./Users";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";
import Loader from "../Common/Preloader/Loader";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }
    onPageChanged = (page) => {
        const {pageSize} = this.props;
        this.props.getUsers(page, pageSize)
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Loader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
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

export default compose(
    connect(mapStateToProps,{follow, unfollow, getUsers }),
    withAuthRedirect
)(UsersContainer);
