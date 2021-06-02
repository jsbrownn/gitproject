import React from 'react';


function RepositoriesItem({key, name , description, html_url}) {
    

    return (
        <li className="reposetiries-list__item" id={key}>
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


// key={item.id}
// name={item.name}
// description={item.description}
// html_url={item.html_url}
// />