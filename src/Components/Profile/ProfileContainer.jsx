import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'

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
        profile: state.profilePage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);