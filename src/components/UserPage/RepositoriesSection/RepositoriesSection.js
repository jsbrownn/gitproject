import React from 'react';
// import ReactPaginate from 'react-paginate';
import RepositoriesList from './RepositoriesList';

function RepositoriesSection({repos }) {
    console.log(repos.data);
    
    return (
        <div className="repositories-section">
            <>
                <h2 className="repositories__title">Repositories ({repos.data.length})</h2>
                <RepositoriesList />
                {/* <ReactPaginate /> */}
            </>
        </div>
    )
}

export default RepositoriesSection;
