import React from 'react';
import Banner from './Banner';
import Discover from './Discover';
import ExpertChose from './ExpertChose';
import Exploring from './Exploring';
import KidsOffer from './KidsOffer';
import NewArivals from './NewArivals';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Discover></Discover>
            <NewArivals></NewArivals>
            <Exploring></Exploring>
            <KidsOffer></KidsOffer>
            <ExpertChose></ExpertChose>
        </div>
    );
};

export default Home;