import React from 'react';
import './Sidebar.css'
import {user} from '../../DummData'
import {RssFeed, School, Event, WorkOutline, HelpOutline, Bookmark, Group, PlayCircleFilledOutlined, Chat} from '@mui/icons-material'
import CloseFriend from '../CloseFriend/CloseFriend';

const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className='sideWrapper'>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <RssFeed className='sidebarIcon'></RssFeed>
                    <span className='sidebarListItemText'>Feed</span>
                </li>
                <li className='sidebarListItem'>
                    <Chat className='sidebarIcon'></Chat>
                    <span className='sidebarListItemText'>Chat</span>
                </li>
                <li className='sidebarListItem'>
                    <PlayCircleFilledOutlined className='sidebarIcon'></PlayCircleFilledOutlined>
                    <span className='sidebarListItemText'>PlayCircleFilledOutlined</span>
                </li>
                <li className='sidebarListItem'>
                    <Group className='sidebarIcon'></Group>
                    <span className='sidebarListItemText'>Group</span>
                </li>
                <li className='sidebarListItem'>
                    <Bookmark className='sidebarIcon'></Bookmark>
                    <span className='sidebarListItemText'>Bookmark</span>
                </li>
                <li className='sidebarListItem'>
                    <HelpOutline className='sidebarIcon'></HelpOutline>
                    <span className='sidebarListItemText'>HelpOutline</span>
                </li>
                <li className='sidebarListItem'>
                    <WorkOutline className='sidebarIcon'></WorkOutline>
                    <span className='sidebarListItemText'>WorkOutline</span>
                </li>
                <li className='sidebarListItem'>
                    <Event className='sidebarIcon'></Event>
                    <span className='sidebarListItemText'>Event</span>
                </li>
                <li className='sidebarListItem'>
                    <School className='sidebarIcon'></School>
                    <span className='sidebarListItemText'>School</span>
                </li>
            </ul>
            <button className='sidebarButton'>Show More...</button>
            <hr className='sidebarHr'/>
            <ul className='sidebarFriendList'>
                {user.map(u=>(
                    <CloseFriend key={u.id} user={u}></CloseFriend>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default Sidebar;