import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {profileAPI} from "../../API/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        profileAPI.getUserProfile(userId).then(data => {
                this.props.setUserProfile(data);
            });
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);