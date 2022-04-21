import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import withRouter from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render () {
        return <Profile {...this.props} profile={this.props.profile}/>
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);