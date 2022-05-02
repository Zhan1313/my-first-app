import React from "react";
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        return (
            <div className={s.statusBlock}>
                {!this.state.editMode &&
                    <div className={s.status}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onChange={this.onStatusChange}
                               onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;