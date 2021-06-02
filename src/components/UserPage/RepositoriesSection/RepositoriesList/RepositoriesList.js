import React from 'react';
import RepositoriesItem from './RepositoriesItem';
import ReactPaginate from 'react-paginate';

function RepositoriesList({ user, repos }) {


    return (
        <>
            <ul className="repositories__list">
                {repos?.data?.map((item) => (
                    <RepositoriesItem
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        html_url={item.html_url}
                    />
                ))}

        </ul>
            <div className="repositories_paginate">

                <ReactPaginate
                    // forcePage={currentPage}
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={4}
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={user.public_repos / 4}
                    // onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"} />
            </div>
        </>
    )
};

export default RepositoriesList;

