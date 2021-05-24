import React, { Components } from 'react';
import './App.css';
import Header from './components/Header/Header';
import EmptyState from './components/EmptyState/EmptyState';
import InitialState from './components/InitialState/InitialState';
import UserPage from './components/UserPage/UserPage';

function App() {
    return (
        <div className="wrapper">
            <>
                <Header />
                {/* <EmptyState />
                <InitialState /> */}
                <UserPage />
            </>
        </div>

    );
}

export default App;
