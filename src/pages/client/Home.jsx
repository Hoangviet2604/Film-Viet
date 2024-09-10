import React from 'react';
import Header from '../../layouts/Header';
import Slider from './Slider';
import ItemCarousel from './ItemCarousel';
function Home() {
    return (
        <div>
            <Header/>
            {/* <Slider/> */}
            <ItemCarousel/>
            <ItemCarousel/>
            <ItemCarousel/>
        </div>
    );
}

export default Home;