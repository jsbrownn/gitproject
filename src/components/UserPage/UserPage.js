import React from 'react';
import UserInfo from '../UserPage/UserInfo';
import RepositoriesSection from './RepositoriesSection/RepositoriesSection';

const UserPage = ({ user, repos}) => {
    
    return (
        <div className='app-user__page'>{
            <div className="container container-page">
                <UserInfo user={user} />
                <RepositoriesSection repos={repos} />
            </div>
        }
        </div>
    );
}

export default UserPage;
