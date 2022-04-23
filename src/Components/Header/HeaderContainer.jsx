import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setAuthUserProfile, setUserAuthData} from "../../Redux/auth-reducer";
import {UsersAPI} from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        UsersAPI.getUserAuthData().then(data => {
                let {id, email, login} = data.data;
                this.props.setUserAuthData(id, email, login);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                    .then(response => {
                        this.props.setAuthUserProfile(response.data);
                    })
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authProfile: state.auth.authProfile
});

export default connect(mapStateToProps, {setUserAuthData, setAuthUserProfile})(HeaderContainer);