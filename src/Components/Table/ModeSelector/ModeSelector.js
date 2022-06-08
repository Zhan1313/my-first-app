import React from "react";
import s from './ModeSelector.module.css';

const ModeSelector = props => {
    const url = `https://social-network.samuraijs.com/api/1.0/users?page=1&count=5`;

    return (
        <div className={s.modeSelectorButton}>
            <button onClick={() => props.onSelect(url)} className="btn btn-success">Load Users</button>
        </div>
    )
}
export default ModeSelector;