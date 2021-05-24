import React from 'react'
import following from './../../../../../assets/icons/following.svg';
function FollowingAmount() {
    return (

        <li className="followers-list__item following">
            <>
                <img src={following} alt="following" className="following__pic" />
                <div className="following__amount">171 following</div>
            </>
        </li>

    )
}

export default FollowingAmount
