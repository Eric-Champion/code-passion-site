import { Container, Row, Col } from 'react-bootstrap';

export default function Stats() {
  const donnees = [
    { chiffre: "20+", label: "Années d'Expérience", icone: "bi-calendar-check" },
    { chiffre: "40+", label: "Projets Terminés", icone: "bi-check-all" },
    { chiffre: "18", label: "Années .NET / C#", icone: "bi-cpu" },
    { chiffre: "100%", label: "Passion & Engagement", icone: "bi-heart-fill" }
  ];

  return (
    // py-2 est le SEUL espace qui définit la hauteur de ta barre bleue
    <div className="py-2 w-100"> 
      <Container>
        <Row className="text-center g-0 align-items-center">
          {donnees.map((item, index) => (
            <Col key={index} xs={6} md={3}>
              <div className="align-items-center justify-content-center">
                <i className={`${item.icone} fs-4 text-bleu-fonce me-2`}></i>
                <span className="fw-bold text-gris-passion me-1" style={{ fontSize: '1.5rem' }}>
                  {item.chiffre}
                </span>
                <div className="text-muted fw-medium" style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>
                  {item.label}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}