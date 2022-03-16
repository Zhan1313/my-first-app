import React from 'react';
import {sendDialogsMessageActionCreator,updateNewDialogMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({store, dispatch}) => {
    let state = store.getState();

    let onSendNewDialogsMessage = () => {
        dispatch(sendDialogsMessageActionCreator())
    }
    let onNewDialogMessageChange = (messageText) => {
        dispatch(updateNewDialogMessageTextActionCreator(messageText));
    }

    return <Dialogs onSendNewDialogsMessage={onSendNewDialogsMessage}
                    onNewDialogMessageChange={onNewDialogMessageChange}
                    dialogItems={state.dialogsPage.dialogItems}
                    dialogMessages={state.dialogsPage.dialogMessages}
                    newDialogMessageText={state.dialogsPage.newDialogsMessageText}/>
}
export default DialogsContainer;