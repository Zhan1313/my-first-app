import {sendDialogsMessageActionCreator, updateNewDialogMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/AuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogItems: state.dialogsPage.dialogItems,
        dialogMessages: state.dialogsPage.dialogMessages,
        newDialogMessageText: state.dialogsPage.newDialogsMessageText,
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
let WithAuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirectComponent);
export default DialogsContainer;