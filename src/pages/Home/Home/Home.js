import React from 'react';
import Slider from '../Slider/Slider';
import TourPackages from '../TourPackages/TourPackages';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import NewsletterSubscription from './NewsletterSubscription/NewsletterSubscription';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <WhyChooseUs></WhyChooseUs>
            <TourPackages></TourPackages>
            <NewsletterSubscription></NewsletterSubscription>

        </div>
    );
};

export default Home;