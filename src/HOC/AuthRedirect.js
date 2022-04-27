import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}