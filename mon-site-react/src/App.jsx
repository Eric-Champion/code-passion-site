import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'; // Ton composant actuel
import Contact from './pages/Contact'; // Ton composant actuel


// On crée des composants temporaires pour tester les autres pages
const Services = () => <div className="text-white p-5"><h2>Mes Services .NET & React</h2></div>;

function App() {
  return (
    <Router>
      <div className="bg-gris-passion" style={{ minHeight: '100vh' }}>
        {/* LA BARRE DE NAVIGATION (Toujours là) */}
        <Navigation />
        
        {/* LE CONTENU QUI CHANGE SELON L'URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;