import {connect} from "react-redux";
import Friends from "./Friends";


const mapStateToProps = (state) => {
    return {
        friendsData: state.sideBar.friendsData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;