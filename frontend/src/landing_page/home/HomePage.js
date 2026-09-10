import React from 'react';
import Hero from './Hero';
import Awards from './Award';
import Education from './Eduction';
import Pricing from './Pricing';
import Stats from './Statcs';
import OpenAccount from '../../OpenAccount';
import Footer from '../../Footer';

function HomePage() {
    return (
        <>
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            
           
            
        </>
    );
}

export default HomePage;