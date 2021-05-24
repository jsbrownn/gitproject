import React from 'react';
import followers from './../../../../../assets/icons/followers.svg';

function FollowersAmount() {
    return (
        <li className="followers-list__item followers">
            <>
                <img src={followers} alt="" className="followers__pic" />
                <div className="followers__amount">65.8k followers</div>
            </>
        </li>
    )
}

export default FollowersAmount
