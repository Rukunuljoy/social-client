import React from 'react';

const CloseFriend = ({user}) => {
    return (
        <li className='sidebarFriend'>
        <img className='sidebarFriendImg' src={user.profilePic} alt='' />
        <span className='sidebarFriendName'>{user.userName}</span>
    </li>
    );
};

export default CloseFriend;