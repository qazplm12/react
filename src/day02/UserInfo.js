import React from 'react';
import Avatar from "./Avatar";

function UserInfo(props) {
    return(
        <div>
            <div className={'user-info'}>
                <Avatar user={props.userData} />
                <div className={'user-info-name'}>{props.userData.name}</div>
            </div>
        </div>
    )
}

export default UserInfo;