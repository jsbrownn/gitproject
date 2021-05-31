import React from 'react';


function RepositoriesItem({repos}) {
    console.log(repos);
    
    return (
        <li className="reposetiries-list__item">
            <a
                href="http://localhost:3000/"
                className="repository-item__name"
                target="_blank"
                rel="noopener noreferrer"  //атрибут необходим для устранения уязвимости атрибута target//
            >
                {/* {name} */}
            </a>
            <div className="repository-item__description">
               {/* { description} */}
                </div>
        </li>

    )
}

export default RepositoriesItem;
