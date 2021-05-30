import React, { Components, useState } from 'react';
import './App.css';
import Header from './components/Header';
import EmptyState from './components/EmptyState';
import InitialState from './components/InitialState';
import UserPage from './components/UserPage/';
import { Octokit } from "@octokit/rest";
import ReactPaginate from 'react-paginate';




const octokit = new Octokit();


function App() {


    const [user, setUser] = useState({});
    const [repos, setRepos] = useState({});


    async function onEnterClick(value) {
        if (value) {
            const userData = await fetchData(value);
            if (userData.data) {
                setUser(userData.data)

            };

            if (userData.data.public_repos > 0) {
                const repos = await fetchRepos(value);
                console.log(repos);
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








    return (
        <div className="wrapper">
            <>
                <Header onEnterClick={onEnterClick} />
                {/* <EmptyState /> */}
                {/* <InitialState /> */}
                <UserPage
                    user={user} repos={repos} />
            </>
        </div>

    );





    // const renderMainSection = () => {
    //     if (initialState) {
    //         return (
    //             <InitialState />
    //         );
    //     }

    //     if (user) {
    //         return (
    //             <UserPage
    //                 user={user}
    //                 repos={repos}
    //                 perPage={perPage}
    //                 onChangeOffset={fetchReposPerPage}
    //                 currentPage={currentPage}
    //                 onPageChange={setCurrentPage}
    //                 loadingUserInfo={loadingUserInfo}
    //                 loadingUserRepos={loadingUserRepos}
    //             />
    //         );
    //     }



    //     return (
    //         <div className="wrapper">
    //             <Header
    //                 searchInput={searchInput}
    //                 handleChange={handleChange}
    //                 handleKeyPress={handleKeyPress}
    //             />
    //             <div className="app-main">{renderMainSection()}</div>
    //         </div>
    //     );
    // };
};

export default App;
