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
        onSendNewDialogsMessage: () => {
            dispatch(sendDialogsMessageActionCreator())
        },
        onNewDialogMessageChange: (messageText) => {
            dispatch(updateNewDialogMessageTextActionCreator(messageText));
        }
    }
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
let WithAuthRedirectComponent = withAuthRedirect(Dialogs);

export default connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirectComponent);
