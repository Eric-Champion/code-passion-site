// src/components/Portfolio.jsx
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { realisationsData } from '../data/realisationsData';
import ScrollReveal from "./ScrollReveal";

const Realisations = () => {
  return (
    <section id="realisations" className="py-5 bg-gris-passion"> {/* Ton fond Gris Passion */}
      <Container className="py-4">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white">Mes Réalisations</h2> {/* Titre Blanc */}
          <div className="mx-auto bg-bleu-clair" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
          <p className="lead mt-3 mx-auto" style={{ maxWidth: '700px', color: 'rgba(255, 255, 255, 0.85)'}}> {/* Blanc 50% */}
            Découvrez les piliers de mon expertise à travers des projets critiques et durables, 
            conçus pour la performance et la conformité.
          </p>
        </div>

        <Row className="g-4">
          {realisationsData.map((projet) => (
            <Col key={projet.id} lg={6}>
              <ScrollReveal delay={projet.scrollreaver_delay}>
              <Card 
                className="h-100 border-0 shadow-lg hover-shadow transition" 
                style={{ 
                  borderRadius: '20px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.07)', // Fond carte ultra-léger
                  border: '1px solid rgba(255, 255, 255, 0.12)', // Bordure fine pour définir la forme
                  backdropFilter: 'blur(10px)' // Effet "Glassmorphism" moderne
                }}
              >
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start justify-content-between mb-4">
                    <div className="bg-bleu-clair p-3 rounded-3 text-gris-passion shadow">
                      <i className={`bi ${projet.icone} fs-3`}></i>
                    </div>
                    <Badge bg="transparent" className="text-bleu-clair border border-bleu-clair px-3 py-2 rounded-pill">
                      {projet.status}
                    </Badge>
                  </div>

                  <h3 className="h4 fw-bold text-white mb-1">{projet.titre}</h3>
                  <p className="text-bleu-clair fw-medium mb-4 small text-uppercase ls-wide">
                    {projet.sousTitre}
                  </p>
                  
                  <Card.Text className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.95rem' }}>
                    {projet.description}
                  </Card.Text>

                  <ul className="list-unstyled mb-4">
                    {projet.pointsForts.map((point, idx) => (
                      <li key={idx} className="d-flex align-items-center mb-2 small" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        <i className="bi bi-check2 text-bleu-clair me-2"></i>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex flex-wrap gap-2 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    {projet.tags.map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        bg="transparent" 
                        className="border border-secondary fw-normal px-2 py-1"
                        style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.75rem' }}
                        >
                            {tag}
                        </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
              </ScrollReveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Realisations;