import React from 'react';
import './RepositoriesList.css'
import RepositoriesItem from './RepositoriesItem';


function RepositoriesList({ repos }) {

    return (

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
    )
};

export default RepositoriesList;

