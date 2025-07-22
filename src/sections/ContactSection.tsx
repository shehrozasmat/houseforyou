import React from 'react';
import { getImagePath } from '../utils/imagePath';
import { Button } from '../components/ui/Button';

export const ContactSection: React.FC = () => {
  return (
    <section 
      className="position-relative py-5" 
      style={{
        backgroundImage: `url('${getImagePath('/contact-form-background.png')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{backgroundColor: '#0A332D', opacity: 0.8}}
      ></div>

      <div className="position-relative container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <div className="mb-5">
              <h2 
                className="h3 mb-3" 
                style={{fontFamily: 'Manrope', color: '#FFA74E', fontWeight: 400}}
              >
                Nie przekonaliśmy Cię?
              </h2>
              <h3 
                className="h3 fw-bold" 
                style={{fontFamily: 'Manrope', color: '#FFA74E'}}
              >
                Napisz i umów się na rozmowę
              </h3>
            </div>

            <Button 
              variant="filled"
              size="large"
              style={{
                background: 'linear-gradient(90deg, rgba(13, 56, 49, 0.95) 0%, rgba(38, 116, 102, 0) 100%), rgba(15, 66, 58, 0.9)',
                border: '2px solid #244641',
                color: '#FFA74E',
                minWidth: '392px'
              }}
            >
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};