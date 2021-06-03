import React from 'react';
import './InitialState.css';
import search from '../../assets/icons/search.svg';


const InitialState = () => {

    return (

        <div className="initial-state">
            <label htmlFor='search'>
                <div className="initial-wrap">
                    <div className="img-wrap">
                        <img src={search} alt="search" className="initial-state__pic" />
                    </div>
                    <div className="initial-state__desc">Start with searching a GitHub user</div>
                </div>
            </label>
        </div >
    );
};

export default InitialState;
