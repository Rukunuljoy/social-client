import React from 'react';
import Feed from '../../Components/Feed/Feed';
import NavBar from '../../Components/NavBar/NavBar';
import Rightbar from '../../Components/Rightbar/Rightbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <NavBar/>
            <div className='homeContainer'>
            <Sidebar/>
            <Feed/>
            <Rightbar/>
            </div>
        </div>
    );
};

export default Home;