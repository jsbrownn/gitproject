import React, { Components, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InitialState from './components/InitialState';
import EmptyState from './components/EmptyState';
import UserPage from './components/UserPage/';
import { Octokit } from "@octokit/rest";





const octokit = new Octokit();


function App() {

    const [InitialState, setInitialState] = useState(true);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState({});



    async function onEnterClick(value) {

        if (value) {
            const userData = await fetchData(value);
            if (userData.data) {
                setUser(userData.data);
                setInitialState(false);
            };

            if (userData.data.public_repos > 0) {
                const repos = await fetchRepos(value);
                setRepos(repos)
            }

        } else {
            alert('Введите имя пользователя');
        }
    };



    async function fetchData(username) {

        const user = await octokit.request("GET /users/{username}", {
            username
        });
        return user
    };


    async function fetchRepos(username) {

        const repos = await octokit.request("GET /users/{username}/repos", {
            username,
            per_page: 100
        });
        return repos
    };


    const renderMainSection = () => {

        if (InitialState) {
            return (
                <InitialState />
            );
        };

        if (user) {
            return (
                <UserPage
                    user={user}
                    repos={repos}
                />
            );
        };

        if (repos === 0) {
            <EmptyState />
        }



        return (
            <div className="wrapper">
                <Header
                    onEnterClick={onEnterClick}
                />    
            <div className="app-main">{renderMainSection()}</div>
        </div>

        )
    };
};

export default App;
