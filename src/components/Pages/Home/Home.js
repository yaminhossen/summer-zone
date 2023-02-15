import React from 'react';
import Banner from './Banner';
import Discover from './Discover';
import Exploring from './Exploring';
import NewArivals from './NewArivals';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Discover></Discover>
            <NewArivals></NewArivals>
            <Exploring></Exploring>
        </div>
    );
};

export default Home;