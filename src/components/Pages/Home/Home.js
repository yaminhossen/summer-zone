import React from 'react';
import Banner from './Banner';
import DepartmentShop from './DepartmentShop';
import Discover from './Discover';
import ExpertChose from './ExpertChose';
import Exploring from './Exploring';
import KidsOffer from './KidsOffer';
import NewArivals from './NewArivals';
import Offers from './Offers';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Discover></Discover>
            <NewArivals></NewArivals>
            <Exploring></Exploring>
            <KidsOffer></KidsOffer>
            <ExpertChose></ExpertChose>
            <DepartmentShop></DepartmentShop>
            <Offers></Offers>
        </div>
    );
};

export default Home;