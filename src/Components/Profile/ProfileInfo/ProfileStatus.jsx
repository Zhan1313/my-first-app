import React from "react";
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
    }

    render() {
        return (
            <div className={s.statusBlock}>
                <div className={s.status}>
                    {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
                </div>
                <div>
                    {this.state.editMode && <input autoFocus={true} onBlur={this.deactivateEditMode}/>}
                </div>
            </div>
        )
    }
}
export default ProfileStatus;