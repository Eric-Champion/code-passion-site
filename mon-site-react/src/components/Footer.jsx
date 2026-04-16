import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-5" style={{ backgroundColor: '#131e29', borderTop: '1px solid rgba(128, 202, 255, 0.1)' }}>
      <Container>
        <Row className="gy-4">
          {/* Section Identité */}
          <Col lg={5} md={12}>
            <h4 className="text-bleu-fonce fw-bold mb-2">Architecte Solutions .NET</h4>
            <p className="text-white-50 mb-2" style={{ maxWidth: '400px' }}>
              Expert en ingénierie logicielle et gestion de flux critiques. 
              Plus de 20 ans d'expérience au service de la performance métier.
            </p>
            <div className="d-flex gap-3">
              <a href="https://linkedin.com" className="text-bleu-clair fs-4 transition-hover"><i className="bi bi-linkedin"></i></a>
              <a href="mailto:ton-email@exemple.com" className="text-bleu-clair fs-4 transition-hover"><i className="bi bi-envelope-fill"></i></a>
            </div>
          </Col>

          {/* Section Navigation Rapide */}
          <Col lg={3} md={6} className="ps-lg-5">
            <h5 className="text-white fw-bold mb-2">Navigation</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-white-50 text-decoration-none hover-bleu">Accueil</a></li>
              <li className="mb-2"><a href="#realisations" className="text-white-50 text-decoration-none hover-bleu">Réalisations</a></li>
              <li className="mb-2"><a href="#expertises" className="text-white-50 text-decoration-none hover-bleu">Expertises</a></li>
            </ul>
          </Col>

          {/* Section Localisation / Info */}
          <Col lg={4} md={6}>
            <h5 className="text-white fw-bold mb-2">Contact</h5>
            <p className="text-white-50 mb-2">
              <i className="bi bi-geo-alt text-bleu-fonce me-2"></i> Basé en France (Normandie)
            </p>
            <p className="text-white-50 mb-2">
              <i className="bi bi-clock text-bleu-fonce me-2"></i> Disponible pour missions & consulting
            </p>
          </Col>
        </Row>

        <hr className="my-3" style={{ borderColor: 'rgba(255,255,255,1)' }} />

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <p className="text-white-50 mb-0 small">
            &copy; {currentYear} — Conçu avec React & .NET Mindset.
          </p>
          <p className="text-white-50 mb-0 small">
            Propulsé par l'expérience, codé avec passion.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;