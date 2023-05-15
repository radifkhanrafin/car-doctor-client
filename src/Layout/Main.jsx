import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import Home from './Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-64px)]'>
               <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;