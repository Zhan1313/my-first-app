import React from "react";
import Profile from "./Profile";
import {getUserProfile, getUserStatus} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render () {
        return <Profile {...this.props}/>
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer);

