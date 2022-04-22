import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setUserAuthData, setUserProfile} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                let {id, email, login} = response.data.data;
                this.props.setUserAuthData(id, email, login);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                    .then(response => {
                        this.props.setUserProfile(response.data);
                    })
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setUserAuthData, setUserProfile})(HeaderContainer);