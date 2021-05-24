import React from 'react'
import RepositoriesList from './RepositoriesList/RepositoriesList'

function RepositoriesSection() {
    return (
        <div className="repositories-section">
            <>
                <h2 className="repositories__title">Repositories</h2>
                <RepositoriesList />
            </>
        </div>
    )
}

export default RepositoriesSection
