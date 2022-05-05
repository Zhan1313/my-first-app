import s from './Dialogs.module.css';
import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {Field, reduxForm} from "redux-form";

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
    let onSubmit = (formData) => {
        onSendNewDialogsMessage(formData);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.dialogsMessages}>
                {dialogsMessages}
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'type message here...'} component={'textarea'} name={'messageText'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const DialogsReduxForm = reduxForm({form: 'message'})(DialogsForm);
export default Dialogs;