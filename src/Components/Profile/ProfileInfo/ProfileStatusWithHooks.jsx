import React, {useEffect, useState} from "react";

import s from './ProfileStatus.module.css'

const ProfilelStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div className={s.statusBlock}>
            {!editMode &&
            <div className={s.status}>
                <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onChange={onStatusChange}
                       onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    )
}
export default ProfilelStatusWithHooks;