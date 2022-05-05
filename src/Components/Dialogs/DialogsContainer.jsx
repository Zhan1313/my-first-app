import {sendDialogsMessageActionCreator, updateNewDialogMessageTextActionCreator} from "../../Redux/dialogs-reducer";
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
        },
        onNewDialogMessageChange: (messageText) => {
            dispatch(updateNewDialogMessageTextActionCreator(messageText));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
