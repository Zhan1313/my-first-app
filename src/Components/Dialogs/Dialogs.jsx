import s from './Dialogs.module.css';
import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = ({dialogItems, dialogMessages, dispatch, newDialogMessageText}) => {
    let dialogsItems = dialogItems.map(el => <DialogItem name={el.name} id={el.id}/>)
    let dialogsMessages = dialogMessages.map(el => <DialogMessage message={el.message}/>)
    let onAddNewDialogsMessage = () => {
        dispatch({type: 'ADD-DIALOGS-MESSAGE'})
    }
    let newDialogMessageElement = React.createRef();
    let onNewDialogMessageChange = () => {
        let messageText = newDialogMessageElement.current.value;
        dispatch({type: 'UPDATE-DIALOGS-MESSAGE-TEXT', newMessageText: messageText});
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.dialogsMessages}>
                {dialogsMessages}
                <textarea ref={newDialogMessageElement} value={newDialogMessageText} onChange={onNewDialogMessageChange}/>
                <button onClick={onAddNewDialogsMessage}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs;