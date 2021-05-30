import React from 'react';
import RepositoriesItem from './RepositoriesItem';

function RepositoriesList({ name, description, html_url }) {
    return (
        <ul className="repositories__list">
            <RepositoriesItem />
        </ul>
    )
};

export default RepositoriesList;

