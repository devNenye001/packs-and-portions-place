import React from 'react';
import Hero from '../../components/hero/hero';
import Menu from '../../components/menu/menu';
import FinalCTA from '../../components/finalCTA/finalCTA';


const Home = () => {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
        <Hero />
        <Menu />
        <FinalCTA />
    </div>
  );
};

export default Home;