import {sendDialogsMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogsPage.dialogItems,
        dialogMessages: state.dialogsPage.dialogMessages,
        newDialogMessageText: state.dialogsPage.newDialogsMessageText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSendNewDialogsMessage: (formData) => {
            dispatch(sendDialogsMessageActionCreator(formData))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
