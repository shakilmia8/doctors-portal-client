import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services';
import HomeBanner from '../HomeBanner/HomeBanner';
import DentalCare from '../DentalCare/DentalCare';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;