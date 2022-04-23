import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setAuthUserProfile, setUserAuthData} from "../../Redux/auth-reducer";
import {authAPI} from "../../API/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getUserAuthData().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setUserAuthData(id, email, login);
                authAPI.getAuthProfile(id).then(data => {
                        this.props.setAuthUserProfile(data);
                    })
            }
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