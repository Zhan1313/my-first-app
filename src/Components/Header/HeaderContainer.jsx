import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setUserAuthData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                debugger;
                let {id, email, login} = response.data.data
                this.props.setUserAuthData({id, email, login});
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer);