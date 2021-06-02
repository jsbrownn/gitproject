import React from 'react';
import userNotFound from '../../assets/icons/user-not-found.svg';

function UserNotFound() {
    return (
        <div className="user-not-found">
            <div className="user-not-found__block" >
                <img className="user-not-found__image" src={userNotFound} alt="user not found"/>
                <div className="user-not-found__desc">User not found</div>
            </div>
        </div>
    )
}

export default UserNotFound;
