import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import FarmerSection from '../components/FarmerSection';
import WhoWeAre from '../components/WhoWeAre';
import OurServices from '../components/OurServices';
import MissionSlider from '../components/MissionSlider';
import WhatWeDo from '../components/WhatWeDo';
import OurImpact from '../components/OurImpact';
import RDPreview from '../components/RDPreview';
import InfrastructurePreview from '../components/InfrastructurePreview';
import GroupOfCompanies from '../components/GroupOfCompanies';
import OurSeedsRange from '../components/OurSeedsRange';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';
import OurAchievement from '../components/OurAchievement';

import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroBanner />
      <FarmerSection />
      <OurImpact />
      <OurServices />
      <MissionSlider />
      <OurAchievement />
      <GroupOfCompanies />
      <OurSeedsRange />
      <Contact />
      
      <Footer />
    </div>
  );
};

export default HomePage;
