import React from "react";

export const withAuthRedirect = (Component) => {

    let authRedirect = (props) => {
        return <Component {...props}/>
    }
    return authRedirect;
}