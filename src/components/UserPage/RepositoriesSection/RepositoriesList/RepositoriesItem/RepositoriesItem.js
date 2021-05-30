import React from 'react';


function RepositoriesItem({ name, description, html_url }) {
    return (
        <li className="reposetiries-list__item">
            <a
                href={html_url}
                className="repository-item__name"
                target="_blank"
                rel="noopener noreferrer"  //атрибут необходим для устранения уязвимости атрибута target//
            >
                {name}
            </a>
            <div className="repository-item__description">
               { description}
                </div>
        </li>

    )
}

export default RepositoriesItem;
