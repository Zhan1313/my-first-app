import s from './Dialogs.module.css';
import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = ({
                     dialogItems, dialogMessages, onNewDialogMessageChange,
                     onSendNewDialogsMessage, newDialogMessageText
                 }) => {
    let dialogsItems = dialogItems.map(el => <DialogItem name={el.name} id={el.id}/>)
    let dialogsMessages = dialogMessages.map(el => <DialogMessage message={el.message}/>)

    let onSendNewDialogsMessageClick = () => {
        onSendNewDialogsMessage();
    }
    let onNewDialogMessageChangeClick = (e) => {
        let messageText = e.target.value;
        onNewDialogMessageChange(messageText);
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
                    <textarea value={newDialogMessageText} onChange={onNewDialogMessageChangeClick}/>
                </div>
                <div>
                    <button onClick={onSendNewDialogsMessageClick}>Send</button>
                </div>


            </div>
        </div>
    )
}
export default Dialogs;