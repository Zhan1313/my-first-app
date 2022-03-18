import React from 'react';
import {sendDialogsMessageActionCreator, updateNewDialogMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;
            let onSendNewDialogsMessage = () => {
                store.dispatch(sendDialogsMessageActionCreator())
            }
            let onNewDialogMessageChange = (messageText) => {
                store.dispatch(updateNewDialogMessageTextActionCreator(messageText));
            }
            return <Dialogs onSendNewDialogsMessage={onSendNewDialogsMessage}
                            onNewDialogMessageChange={onNewDialogMessageChange}
                            dialogItems={state.dialogItems}
                            dialogMessages={state.dialogMessages}
                            newDialogMessageText={state.newDialogsMessageText}/>
        }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer;