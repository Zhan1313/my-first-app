import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    let path = "/dialogs/" + id
    return (
        <div className={s.dialogItem}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XSv8zvv1XvIvvz8PFg8hRwUTQJjbis-CJg&usqp=CAU'/>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;