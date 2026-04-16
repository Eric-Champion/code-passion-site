// src/pages/Home.jsx
import Hero from '../components/Hero';
import Stats from '../components/Stats'; // Import du composant indépendant
import Realisations from '../components/Realisations';
import Expertises from '../components/Expertises';

const Home = () => {
  return (
    <>
      {/* 1. Impact visuel */}
      <Hero />

      {/* 2. La barre de réassurance (tes stats) */}
      {/* On la met dans une div qui lui donne sa couleur de fond */}
      <div id="Stats" className="py-4 shadow-sm" style={{ backgroundColor: '#BFE4FF' }}>
        <Stats /> 
      </div>

      <Realisations />

      {/* 3. Le contenu détaillé */}
      <div id="expertises">
        <Expertises />
      </div>

    </>
  );
};

export default Home;