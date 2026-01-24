import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import CerealSeedsPage from './pages/CerealSeedsPage';
import OilSeedsPage from './pages/OilSeedsPage';
import PulseSeedsPage from './pages/PulseSeedsPage';
import SpicesSeedsPage from './pages/SpicesSeedsPage';
import VegetableSeedsPage from './pages/VegetableSeedsPage';
import FodderSeedsPage from './pages/FodderSeedsPage';
import CastorProductPage from './pages/CastorProductPage';
import GroundnutProductPage from './pages/GroundnutProductPage';
import MustardProductPage from './pages/MustardProductPage';
import SesameProductPage from './pages/SesameProductPage';
import RapeseedProductPage from './pages/RapeseedProductPage';
import WheatProductPage from './pages/WheatProductPage';
import MaizeProductPage from './pages/MaizeProductPage';
import BajraProductPage from './pages/BajraProductPage';
import GreenGramProductPage from './pages/GreenGramProductPage';
import BlackGramProductPage from './pages/BlackGramProductPage';
import GuarProductPage from './pages/GuarProductPage';
import CuminProductPage from './pages/CuminProductPage';
import FennelProductPage from './pages/FennelProductPage';
import IsabgolProductPage from './pages/IsabgolProductPage';
import OkraProductPage from './pages/OkraProductPage';
import ChilliProductPage from './pages/ChilliProductPage';
import BajraFodderProductPage from './pages/BajraFodderProductPage';
import ClusterBeanProductPage from './pages/ClusterBeanProductPage';
import GenericProductPage from './pages/GenericProductPage';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        
        
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products/cereals" element={<CerealSeedsPage />} />
        <Route path="/products/oil-seeds" element={<OilSeedsPage />} />
        <Route path="/products/pulses" element={<PulseSeedsPage />} />
        <Route path="/products/spices" element={<SpicesSeedsPage />} />
        <Route path="/products/vegetables" element={<VegetableSeedsPage />} />
        <Route path="/products/fodder" element={<FodderSeedsPage />} />
        <Route path="/products/castor" element={<CastorProductPage />} />
        <Route path="/products/groundnut" element={<GroundnutProductPage />} />
        <Route path="/products/mustard" element={<MustardProductPage />} />
        <Route path="/products/sesame" element={<SesameProductPage />} />
        <Route path="/products/rapeseed" element={<RapeseedProductPage />} />
        <Route path="/products/wheat" element={<WheatProductPage />} />
        <Route path="/products/maize" element={<MaizeProductPage />} />
        <Route path="/products/bajra" element={<BajraProductPage />} />
        <Route path="/products/green-gram" element={<GreenGramProductPage />} />
        <Route path="/products/black-gram" element={<BlackGramProductPage />} />
        <Route path="/products/guar" element={<GuarProductPage />} />
        <Route path="/products/cumin" element={<CuminProductPage />} />
        <Route path="/products/fennel" element={<FennelProductPage />} />
        <Route path="/products/isabgol" element={<IsabgolProductPage />} />
        <Route path="/products/okra" element={<OkraProductPage />} />
        <Route path="/products/chilli" element={<ChilliProductPage />} />
        <Route path="/products/bajra-fodder" element={<BajraFodderProductPage />} />
        <Route path="/products/coriander" element={<GenericProductPage />} />
        <Route path="/products/cowpea" element={<GenericProductPage />} />
        <Route path="/products/cluster-bean" element={<ClusterBeanProductPage />} />
        <Route path="/products/bottle-gourd" element={<GenericProductPage />} />
        <Route path="/products/ridge-gourd" element={<GenericProductPage />} />
        <Route path="/products/tomato" element={<GenericProductPage />} />
        <Route path="/products/spinach" element={<GenericProductPage />} />
        <Route path="/products/peas" element={<GenericProductPage />} />
        <Route path="/products/muskmelon" element={<GenericProductPage />} />
        <Route path="/products/watermelon" element={<GenericProductPage />} />
      </Routes>
      <WhatsAppButton />
      <ScrollToTop />
    </Router>
  );
}

export default App;
