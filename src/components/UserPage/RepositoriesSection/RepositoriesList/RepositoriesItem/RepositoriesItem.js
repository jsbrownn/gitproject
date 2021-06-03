import React from 'react';
import './RepositoriesItem.css'

function RepositoriesItem({ id, name, description, html_url }) {

    return (
        <li className="reposetiries-list__item" key={id}>
            <a
                href={html_url}
                className="repository-item__name"
                target="_blank"
                rel="noopener noreferrer"
            >
                {name}
            </a>
            <div className="repository-item__description">
                {description}
            </div>
        </li>
    )
};

export default RepositoriesItem;


