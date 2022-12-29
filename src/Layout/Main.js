import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Contexts/AuthProvider/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;