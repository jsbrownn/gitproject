import React from 'react';
import github from './../../assets/icons/github.svg';
import FormSearch from './FormSearch/FormSearch';

function Header() {
    return (
        <header className="header">
        <>
            <a href="github.com" className="header__logo-link" target="_blank">
                <img src={github} className="github-icon" alt='github' /> 
                
            </a>
            <FormSearch />
        </>
    </header>
    );
}

export default Header
