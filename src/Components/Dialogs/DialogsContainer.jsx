import {sendDialogsMessageActionCreator, updateNewDialogMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogsPage.dialogItems,
        dialogMessages: state.dialogsPage.dialogMessages,
        newDialogMessageText: state.dialogsPage.newDialogsMessageText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSendNewDialogsMessage: () => {
            dispatch(sendDialogsMessageActionCreator())
        },
        onNewDialogMessageChange: (messageText) => {
            dispatch(updateNewDialogMessageTextActionCreator(messageText));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;