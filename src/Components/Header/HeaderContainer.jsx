import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getUserAuthData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserAuthData();
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

export default connect(mapStateToProps, {getUserAuthData})(HeaderContainer);