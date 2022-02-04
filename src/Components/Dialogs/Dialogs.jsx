import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = ({dialogs, messages}) => {
    let dialogItems = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let dialogMessages = messages.map(el => <DialogMessage message={el.message}/>)
    let california = () => {
        console.log('Letti')
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogItems}
            </div>
            <div className={s.messages}>
                {dialogMessages}
                <textarea></textarea>
                <button onClick={california}>Send</button>
            </div>
        </div>
    )
}
export default Dialogs;