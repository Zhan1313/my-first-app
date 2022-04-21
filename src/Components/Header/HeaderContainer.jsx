import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => {
                this.props.setUserAuthData(response.data);
            });
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer);