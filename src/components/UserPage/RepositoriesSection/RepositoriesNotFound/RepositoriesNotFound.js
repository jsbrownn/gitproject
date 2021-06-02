import React from 'react';
import Empty from '../../../../assets/icons/empty.svg';

function RepositoriesNotFound() {
    return (
        <div className="empty-state">
            <div className="empty-state__block" >
                <img className="empty-state__image" src={Empty} alt="empty"/>    
            </div>
        </div>
    )
}

export default RepositoriesNotFound;