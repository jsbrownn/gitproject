import React from 'react';
import RepositoriesList from './RepositoriesList';
// import RepositoriesNotFound from './RepositoriesNotFound'

function RepositoriesSection({ repos, user }) {
    console.log(user);

    // const checkRepos = () => {
    //     if (user.public_repos === 0) {

    //         return (
    //             <RepositororiesNotFound />
    //         )
    //     } else {
    //         return(
    //         <RepositoriesList
    //             repos={repos}
    //             user={user}
    //         />
    //         )
    //     }
    // }

    return (
        
        <div className="repositories-section">
            <>
                <h2 className="repositories__title">Repositories ({user.public_repos})</h2>
                {/* {checkRepos()} */}

                <RepositoriesList
                    repos={repos}
                    user={user}
                />

            </>
        </div>
    )
}

export default RepositoriesSection;
