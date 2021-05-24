import React from 'react'
import FollowersAmount from './FollowersAmount/FollowersAmount'
import FollowingAmount from './FollowingAmount/FollowingAmount'


function FollowersList() {
    return (
        <ul className="followers__list">
            <>
                <FollowersAmount />
                <FollowingAmount />
            </>
        </ul>

    )
}

export default FollowersList
