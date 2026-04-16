import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section 
      className="bg-gris-passion text-white d-flex align-items-center text-center" 
      style={{ 
        minHeight: 'calc(100vh - 98px)', 
        position: 'relative', 
        overflow: 'hidden',
        // --- 1. L'IMAGE DE FOND ---
        backgroundImage: 'url("/Home.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    > 
      {/* --- 2. L'OVERLAY DE CONTRASTE (Le filtre sombre) --- */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{ 
          backgroundColor: 'rgba(23, 37, 50, 0.7)', // Gris Passion avec 70% d'opacité
          backdropFilter: 'blur(3px)', // Optionnel : un léger flou sur l'image pour la profondeur
          zIndex: 1
        }}
      ></div>

      {/* --- 3. LE CONTENU (Au-dessus de l'overlay) --- */}
      <Container className="py-5" style={{ zIndex: 5 }}>
        <div className="d-flex flex-column align-items-center">
                    
          {/* Titre Massive */}
          <h1 className="display-2 fw-bold mb-4" style={{ letterSpacing: '-1px' }}>
           Architecte Solutions <span className="text-bleu-clair">.NET</span> & <span className="text-bleu-clair">React</span>
          </h1>
          
          {/* Sous-titre */}
          <p className="lead mb-5 opacity-90 fs-4 mx-auto" style={{ maxWidth: '800px' }}>
            J'accompagne les entreprises dans la conception et le développement d'applications métiers haute performance. 20 ans d'expertise au service de votre transformation numérique.
          </p>

          {/* Actions */}
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
            {/* Bouton Primaire : Les Preuves */}
            <a href="#realisations" className="btn btn-bleu-logo px-5 py-3 fw-bold rounded-pill shadow transition-all">
              <i className="bi bi-eye me-2"></i>
              Mes Réalisations
            </a>

            {/* Bouton Secondaire : Les Services */}
            <a href="#expertises" className="btn btn-outline-bleu-logo px-5 py-3 fw-bold rounded-pill transition-all">
              <i className="bi bi-gear-wide-connected me-2"></i>
              Mes Expertises
            </a>
          </div>
        </div>
      </Container>
      
    </section>
  );
};

export default Hero;