import s from './Dialogs.module.css';
import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../Utils/validators/validators";

const Dialogs = ({dialogItems, dialogMessages, onSendNewDialogsMessage}) => {
    let dialogsItems = dialogItems.map(el => <DialogItem name={el.name} id={el.id}/>)
    let dialogsMessages = dialogMessages.map(el => <DialogMessage message={el.message}/>)

    let sendDialogsMessage = (formData) => {
        onSendNewDialogsMessage(formData);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.dialogsMessages}>
                {dialogsMessages}
                <AddDialogsMessageForm onSubmit={sendDialogsMessage}/>
            </div>
        </div>
    )
}
const maxLength10 = maxLengthCreator(10);
const DialogsMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'type message here...'} component={Textarea}
                        validate={[required,maxLength10]}
                       name={'messageText'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddDialogsMessageForm = reduxForm({form: 'dialogsMessageForm'})(DialogsMessageForm);
export default Dialogs;