import s from './DialogMessage.module.css'

const DialogMessage = ({message}) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}

export default DialogMessage;