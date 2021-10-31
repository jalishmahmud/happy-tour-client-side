import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import TourPackages from '../TourPackages/TourPackages';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import NewsletterSubscription from './NewsletterSubscription/NewsletterSubscription';

const Home = () => {
    return (
        <div>
            <WhyChooseUs></WhyChooseUs>
            <TourPackages></TourPackages>
            <NewsletterSubscription></NewsletterSubscription>
            <Footer></Footer>

        </div>
    );
};

export default Home;