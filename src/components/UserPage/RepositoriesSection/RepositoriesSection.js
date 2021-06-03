import React from 'react';
import './RepositoriesSection.css';
import RepositoriesList from './RepositoriesList';
import RepositoriesNotFound from './RepositoriesNotFound';

function RepositoriesSection({ repos, user }) {

    const checkRepos = () => {
        if (user.public_repos === 0) {
            return (
                <RepositoriesNotFound />
            )
        } else {
            return (
                <>
                    <h2 className="repositories__title">Repositories ({user.public_repos})</h2>
                    <RepositoriesList
                        repos={repos}
                        user={user}
                    />
                </>
            )
        }
    };

    return (
        <div className="repositories-section">
            {checkRepos()}
        </div>
    );
};

export default RepositoriesSection;
