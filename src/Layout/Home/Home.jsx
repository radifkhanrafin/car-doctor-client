import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Services from './Servies/Services';
import Navbar from '../../Components/Header/Navbar';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <About></About>
        <Services></Services>
      </div>
    );
};

export default Home;