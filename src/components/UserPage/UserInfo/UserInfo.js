import React from "react";
import followersIcon from "../../../assets/icons/followers.svg";
import followingIcon from "../../../assets/icons/following.svg";


const UserInfo = ({ user }) => {

    const { avatar_url, html_url, name, login, followers, following } = user;

    const convertToK = (num) => {
        return (num) > 999
            ? (num / 1000).toFixed(1) + "K"
            : num;
    };

    return (
        <div className="app-user__info">
            <div className='app-user__avatar'>
                <img
                    src={avatar_url}
                    alt="avatar"
                    className="app-user__avatar-pic"
                />
            </div>

            <h3 className="app-user__fullname">{name}</h3>

            <a
                href={html_url}
                className="app-user__username"
                target="_blank"
                rel="noopener noreferrer" >{login}
            </a>

            <ul className="app-user-followers__list">

                <li className="app-user-followers__item ">
                    <img
                        src={followersIcon}
                        alt=""
                        className="followers__icon"
                    />
                    <div className="followers__count"> {convertToK(followers)} followers</div>
                </li>

                <li className="app-user-followers__item">
                    <img
                        src={followingIcon}
                        alt="following"
                        className="following__icon"
                    />
                    <div className="following__count">{convertToK(following)} following</div>
                </li>

            </ul>
        </div>
    );

};

export default UserInfo;
