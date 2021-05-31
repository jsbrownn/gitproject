import React from 'react';
import search from '../../assets/icons/search.svg';

function InitialState() {
    return (

        <div className="initial-state">
            <label for='search'>
                <div className="initial-wrap">
                    <div className="img-wrap">
                        <img src={search} alt="" className="initial-state__pic" />
                    </div>
                    <div className="initial-state__desc">Start with searching a GitHub user</div>

                </div>
            </label>
        </div >

    );
};

export default  InitialState;
