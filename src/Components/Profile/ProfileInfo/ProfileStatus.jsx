import React from "react";

class ProfileStatus extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <span>{this.props.status}</span>
                </div>
                <div>
                    <input />
                </div>
            </div>
        )
    }
}
export default ProfileStatus;