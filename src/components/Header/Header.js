import React from 'react';
import github from '../../assets/icons/github.svg';
import Input from '../Input';

function Header({ onEnterClick }) {
    return (
        <header className="app-header">
            <div className="container">
                <a href="github.com" className="app-header__link" target="_blank">
                    <img src={github} className="app-header__git-icon" alt='github' />
                </a>
                    <Input onEnterClick={onEnterClick}
                    />
            </div>
        </header>
    );
}

export default Header;
