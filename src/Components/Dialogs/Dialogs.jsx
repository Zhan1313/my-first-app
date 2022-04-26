import s from './Dialogs.module.css';
import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {Redirect} from "react-router-dom";

const Dialogs = ({dialogItems, dialogMessages, onNewDialogMessageChange,
                     onSendNewDialogsMessage, newDialogMessageText, isAuth}) => {
    let dialogsItems = dialogItems.map(el => <DialogItem name={el.name} id={el.id}/>)
    let dialogsMessages = dialogMessages.map(el => <DialogMessage message={el.message}/>)

    let onSendNewDialogsMessageClick = () => {
        onSendNewDialogsMessage();
    }
    let onNewDialogMessageChangeClick = (e) => {
        let messageText = e.target.value;
        onNewDialogMessageChange(messageText);
    }
    if (!isAuth) return <Redirect to={'/login'}/>
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