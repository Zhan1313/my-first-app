import React from "react";
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: true
    }

    render() {
        return (
            <div className={s.statusBlock}>
                <div>
                    {!this.state.editMode && <span>{this.props.status}</span>}
                </div>
                <div>
                    {this.state.editMode && <input/>}
                </div>
            </div>
        )
    }
}
export default ProfileStatus;