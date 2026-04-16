import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { expertisesData } from '../data/expertisesData';
import ScrollReveal from "./ScrollReveal";

const Expertises = () => {
  return (
    <ScrollReveal>
      <section id="expertises" className="bg-gradient-expertises"
        style={{ 
          backgroundColor: '#525252', // Ton Gris Passion
          borderTop: '1px solid #80CAFF' // Bordure légère avec ton bleu foncé
        }} 
      >
        <Container className="py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white">Expertises Solutions</h2>
            <div className="mx-auto" style={{ height: '4px', width: '60px', backgroundColor: '#BFE4FF', borderRadius: '2px' }}></div>
            <p className="lead mt-3 text-white" style={{ opacity: 0.9 }}>
              Une approche centrée sur la fiabilité et la valeur métier de vos actifs numériques.
            </p>
          </div>

          <Row className="g-4">
            {expertisesData.map((s, idx) => (
              <Col key={idx} lg={4}>
                <Card 
                  className="h-100 bg-dark bg-opacity-25 transition-hover" 
                  style={{ 
                    border: '1px solid #80CAFF', // Ton Bleu Foncé pour la structure
                    borderRadius: '15px' 
                  }}
                >
                  <Card.Body className="p-4 text-center">
                    <div className="mb-4 d-inline-block p-3 rounded-circle" style={{ backgroundColor: '#BFE4FF1A', color: '#BFE4FF' }}>
                      <i className={`bi ${s.icone} fs-2`}></i> {/* Icône en Bleu Clair */}
                    </div>
                    <h3 className="h4 fw-bold mb-3 text-bleu-fonce">{s.titre}</h3> {/* Titre en Bleu Foncé */}
                    <p className="text-white mb-0" style={{ opacity: 0.85, lineHeight: '1.6' }}>
                      {s.desc}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </ScrollReveal>
  );
};

export default Expertises;