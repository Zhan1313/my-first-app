import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.getUserProfile(userId);
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
let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

let WithAuthRedirectComponent = withAuthRedirect(WithUrlDataContainerComponent);

export default connect(mapStateToProps, {getUserProfile})(WithAuthRedirectComponent);

