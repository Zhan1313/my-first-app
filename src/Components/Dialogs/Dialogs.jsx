import s from './Dialogs.module.css';
import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {sendDialogsMessageActionCreator,updateNewDialogMessageTextActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = ({dialogItems, dialogMessages, dispatch, newDialogMessageText}) => {
    let dialogsItems = dialogItems.map(el => <DialogItem name={el.name} id={el.id}/>)
    let dialogsMessages = dialogMessages.map(el => <DialogMessage message={el.message}/>)

    let onSendNewDialogsMessage = () => {
        dispatch(sendDialogsMessageActionCreator())
    }
    let onNewDialogMessageChange = (e) => {
        let messageText = e.target.value;
        dispatch(updateNewDialogMessageTextActionCreator(messageText));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.dialogsMessages}>
                <div>
                    {dialogsMessages}
                </div>
                <div>
                    <textarea value={newDialogMessageText} onChange={onNewDialogMessageChange}/>
                </div>
                <div>
                    <button onClick={onSendNewDialogsMessage}>Send</button>
                </div>


            </div>
        </div>
    )
}
export default Dialogs;