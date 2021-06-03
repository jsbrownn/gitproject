
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InitialState from './components/InitialState';
import UserNotFound from './components/UserNotFound';
import UserPage from './components/UserPage/';
import ReactPaginate from 'react-paginate';
import { Octokit } from "@octokit/rest";
import Loader from './components/Loader'




const octokit = new Octokit();



function App() {

    const [initialState, setInitialState] = useState(true);
    const [username, setUsername] = useState('');
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState({});
    const [pageSelected, setPage] = useState(0);
    const [isLoading, setLoading] = useState(false);



    const [isUserExist, setUserExist] = useState(false);



    async function onEnterClick(value) {

        if (value) {
            setLoading(true)
            const userData = await fetchData(value);
            setLoading(false)

            if (userData?.data) {
                setUser(userData.data);
                setUsername(userData.data.login);
                setInitialState(false);
                setUserExist(true);

            }

            if (!(userData?.data)) {
                setUserExist(false);
                setInitialState(false);
                setUsername('');

            }


            if (userData?.data?.public_repos > 0) {
                const repos = await fetchRepos(value);
                setRepos(repos)

            };

        } else {
            alert('Введите имя пользователя');
        }
    };



    async function handlePageClick(page) {
        setLoading(true)
        const selected = page.selected + 1
        const repos = await fetchOtherRepos(username, selected);
        setLoading(false)
        setPage(page.selected)
        setRepos(repos)

    };



    async function fetchData(username) {

        try {

            const user = await octokit.request("GET /users/{username}", {
                username
            });
            return user

        } catch (error) {
            console.log('User request error: ', error);
            setUserExist(true);
            setInitialState(false);
        };
    }





    async function fetchRepos(username) {

        const repos = await octokit.request("GET /users/{username}/repos", {
            username,
            per_page: 4,
        });
        return repos
    };

    async function fetchOtherRepos(username, pageSelected) {

        const repos = await octokit.request("GET /users/{username}/repos", {
            username,
            per_page: 4,
            page: pageSelected
        });
        return repos
    };


    const renderMainSection = () => {
        if (isLoading) {
            return (<Loader />)
        }

        if (initialState) {
            return (
                <InitialState />
            );
        };

        if (!isUserExist) {
            return (
                <UserNotFound />
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

    };


    return (

        <div className="wrapper">
            <div className="app-main">

                <Header onEnterClick={onEnterClick} />
                {renderMainSection()}

                {(user?.public_repos > 4 && !isLoading) && (
                    <div className="container-paginate ontainer">
                        <div className="repositories_paginate">
                            <ReactPaginate
                                forcePage={pageSelected}
                                marginPagesDisplayed={0}
                                pageRangeDisplayed={4}
                                previousLabel={"<"}
                                nextLabel={">"}
                                pageCount={user.public_repos / 4}
                                onPageChange={handlePageClick}
                                containerClassName={"pagination"}
                                activeClassName={"active"} />
                        </div>
                    </div>
                )
                }

            </div>

        </div>

    )

};

export default App;


