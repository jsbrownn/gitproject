import React from 'react'
import man from './../../../../assets/man.png';
const UserAvatar = () =>{
    return(
        <div className = 'user__avatar'>
            <img src = {man} alt = "avatar" className ="user__avatar-pic"/>
        </div>
    )
}

export default UserAvatar;