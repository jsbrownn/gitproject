import React from 'react';
import './RepositoriesNotFound.css'
import Empty from '../../../../assets/icons/empty.svg';

function RepositoriesNotFound() {
    return (
        <div className="empty-state">
            <div className="empty-state__block" >
                <img className="empty-state__image" src={Empty} alt="empty"/>  
                <div className="empty-state__desc">Repository list is empty</div>  
            </div>
        </div>
    )
}

export default RepositoriesNotFound;