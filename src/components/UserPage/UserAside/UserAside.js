import React from 'react';
import UserAvatar from './UserAvatar/UserAvatar';
import UserFullname from './UserFullname/UserFullname';
import Username from './Username/Username';
import FollowersList from './FolllowersLIst/FollowersList';


const UserAside = () => {
    return (

        <div className='user'>{
            <>
                <UserAvatar />
                <UserFullname />
                <Username />
                <FollowersList />
            </>
        }
        </div>
    );

}

export default UserAside;