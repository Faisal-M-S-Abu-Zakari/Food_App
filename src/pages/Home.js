
import { Row, Container, Col } from 'react-bootstrap';
import food from '../images/food.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWhatsapp, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Home = () => {


  return (
    <div>
        <Container className='py-3'>
          <Row className="text-start  py-5" >
          <Col xs={12} md={6} className="py-5 " lg={6}>
            <h1 style={{ fontSize: '2.9rem', fontWeight: '700', color: '#2c3e50' , fontFamily: 'Merriweather'}}>
              Welcome to Our Food Ingredients App
            </h1>
            <p style={{ fontSize: '1.4rem', color: '#7f8c8d', lineHeight: '1.8' , fontFfamily: 'Merriweather' , width:'80%'}}>
              Discover a vast collection of recipes tailored to your taste, with detailed ingredient breakdowns and nutritional insights.
            </p>
            <div style={{
                    marginTop: '3rem',
                    fontSize: '1.6rem',
                    color: '#2c3e50',
                    fontFamily: 'Merriweather, serif',
                    fontWeight: '600',
                    
                  }}>
                  <p>Stay Connected With Us!</p>
            </div>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '50px' }}>
                <a href="mailto:zkryfysl@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" color="#3b5998" />
                </a>
                 <a
                    href="https://t.me/Faisal_zakari"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                    }}
                >
                  <FontAwesomeIcon icon={faTelegram} size="2x" color="#0088cc" style={{ transition: 'transform 0.3s ease, color 0.3s ease' }} />
                </a>
                <a
                    href="https://wa.me/972599091546" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none'
                    }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#25d366" style={{ transition: 'transform 0.3s ease, color 0.3s ease' }} />
                </a>
                <a href="www.linkedin.com/in/fesal-zakari" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077b5" />
                </a>
            </div>
          </Col>
          
          <Col xs={12} md={6} className="py-1" lg={6} >
            <img
              src={food}
              alt="Delicious Food"
              style={{
                width: '100%',
                maxWidth: '520px',
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            />
          </Col>
        </Row>
        </Container>
    </div>
  );
};

export default Home;
