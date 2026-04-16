import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  // Fonction de vérification en temps réel
  const handleFormChange = () => {
    const form = formRef.current;
    // checkValidity() vérifie les attributs 'required' et le format de l'email
    setIsFormValid(form.checkValidity());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Remplace par tes identifiants EmailJS validés lors de ton test
    const SERVICE_ID = "smtp.ionos.fr";
    const TEMPLATE_ID = "template_zrcjqek";
    const PUBLIC_KEY = "WHrw6JwXNz3LM0l6s";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setStatus({ 
            type: 'success', 
            message: 'Merci ! Votre message a bien été envoyé. Je vous recontacterai dès que possible.' 
          });
          formRef.current.reset();
      }, (error) => {
          setStatus({ 
            type: 'danger', 
            message: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou m'écrire directement." 
          });
          console.error(error.text);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-5 bg-light text-dark">
      <Container>
        {/* En-tête de section */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-bleu-fonce">Contactez-moi</h2>
          <div className="mx-auto mb-3" style={{ height: '4px', width: '60px', backgroundColor: '#80CAFF', borderRadius: '2px' }}></div>
          <p className="lead">Envie d'échanger sur un projet ? N'hésitez pas !</p>
        </div>

        <Row className="g-5">
          {/* Colonne Gauche : Coordonnées & Infos Légales */}
          <Col lg={5}>
            <div className="pe-lg-4">
              <h3 className="h4 mb-4 border-bottom pb-2 text-bleu-fonce">Mes coordonnées</h3>
              
              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-telephone-fill fs-4 text-bleu-logo"></i>
                </div>
                <div className="ms-3">
                  <div className="fw-bold">Téléphone</div>
                  <a href="tel:+33666869817" className="text-decoration-none text-muted">06.66.86.98.17</a>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-envelope-fill fs-4 text-bleu-logo"></i>
                </div>
                <div className="ms-3">
                  <div className="fw-bold">Email</div>
                  <a href="mailto:eric.champion@code-passion.net" className="text-decoration-none text-muted">eric.champion@code-passion.net</a>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-geo-alt-fill fs-4 text-bleu-logo"></i>
                </div>
                <div className="ms-3">
                  <div className="fw-bold">Adresse</div>
                  <span className="text-muted">398 Rue Pierre Corneille, 76650 Petit-Couronne</span>
                </div>
              </div>

              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <i className="bi bi-clock-fill fs-4 text-bleu-logo"></i>
                </div>
                <div className="ms-3">
                  <div className="fw-bold">Horaires</div>
                  <span className="text-muted">Lundi - Vendredi : 09h00 - 18h00</span>
                </div>
              </div>

              {/* Bloc SIREN style "Carte de visite" */}
              <div className="mt-2 p-2 mb-3 bg-white shadow-sm rounded border-start border-4 border-bleu-logo">
                <h4 className="h6 fw-bold text-uppercase mb-2">Informations légales</h4>
                <div className="small text-muted">
                  <strong>S.I.R.E.N :</strong> 114 434 447<br />
                  <strong>Dénomination :</strong> Code Passion
                </div>
              </div>
              <div className="rounded-4 overflow-hidden shadow-sm border" style={{ height: '400px' }}>
                <iframe
                    title="Localisation Code Passion"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.53342085!2d1.0185!3d49.3854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0df88c88f9f8f%3A0x408ab2ae4bb24b0!2s398%20Rue%20Pierre%20Corneille%2C%2076650%20Petit-Couronne!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">                   
                </iframe>
              </div>

            </div>
          </Col>

          {/* Colonne Droite : Formulaire */}
          <Col lg={7}>
            <Card className="border-0 shadow-sm p-4 rounded-4">
              {status.message && (
                <Alert variant={status.type} dismissible onClose={() => setStatus({type:'', message:''})}>
                  {status.message}
                </Alert>
              )}

              <Form ref={formRef} onChange={handleFormChange} onSubmit={sendEmail}>
                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group controlId="user_name">
                      <Form.Label className="fw-bold">Nom / Prénom *</Form.Label>
                      <Form.Control 
                        required 
                        type="text" 
                        name="user_name" 
                        placeholder="Votre nom" 
                        className="py-2"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="user_email">
                  <Form.Label className="fw-bold">Email *</Form.Label>
                  <Form.Control 
                    required 
                    type="email" 
                    name="user_email" 
                    placeholder="votre@email.com" 
                    className="py-2"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  <Form.Label className="fw-bold">Votre projet *</Form.Label>
                  <Form.Control 
                    required 
                    as="textarea" 
                    name="message" 
                    rows={15} 
                    placeholder="Merci d'indiquer votre projet, sa durée ainsi que le planning prévu." 
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="consent">
                  <Form.Check 
                    required
                    type="checkbox"
                    label="J'accepte que ces données soient stockées et traitées dans le but d'établir un contact conformément au RGPD."
                    onChange={handleFormChange} // Important pour déclencher la vérification
                    className="small text-muted"
                  />
                </Form.Group>

                <Button 
                  type="submit" 
                  disabled={!isFormValid || loading}
                  className={isFormValid ? "btn-contact-active w-100 py-3 fw-bold" : "btn-contact-inactive w-100 py-3 fw-bold"}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Envoi en cours...
                    </>
                  ) : 'Envoyer le message'}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;