import s from './DialogMessage.module.css'

const DialogMessage = ({message}) => {
    debugger;
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}

export default DialogMessage;