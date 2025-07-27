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
        backgroundPosition: 'center',
        marginTop: '-200px' // Overlay effect with the mission section
      }}
    >
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={{backgroundColor: '#0A332D', opacity: 0.9}}
      ></div>

      <div className="position-relative container" style={{paddingTop: '200px'}}>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <h2 
                className="h4 mb-3" 
                style={{fontFamily: 'Manrope', color: '#FFA74E', fontWeight: 400, fontSize: '1.25rem'}}
              >
                Nie przekonaliśmy Cię?
              </h2>
              <h3 
                className="h3 fw-bold mb-4" 
                style={{fontFamily: 'Manrope', color: '#FFA74E', fontSize: '1.5rem'}}
              >
                Napisz i umów się na rozmowę
              </h3>
            </div>

            <Button 
              variant="filled"
              size="large"
              className="d-flex align-items-center"
              style={{
                background: 'transparent',
                border: '2px solid #FFA74E',
                color: '#FFA74E',
                minWidth: '280px',
                padding: '12px 24px',
                fontWeight: 500
              }}
            >
              <span>Wypełnij krótki formularz</span>
              <svg 
                className="ms-2" 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
                style={{color: '#FFA74E'}}
              >
                <path 
                  d="M6 12L10 8L6 4" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};