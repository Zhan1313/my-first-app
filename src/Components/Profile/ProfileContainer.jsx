import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setProfile(response.data);
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
export default connect(mapStateToProps, {setProfile})(ProfileContainer);