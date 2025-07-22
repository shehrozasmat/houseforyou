import React from 'react';
import { getImagePath } from '../utils/imagePath';
import { Button } from '../components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section 
      className="position-relative vh-100 d-flex align-items-center" 
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(33, 26, 26, 0.84), rgba(33, 26, 26, 0.84)), url('${getImagePath('/header-background.png')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center text-white">
            <h1 
              className="display-2 fw-bold mb-4 hero-title" 
              style={{fontFamily: 'Manrope', fontSize: '4rem'}}
            >
              Budujemy Twoje marzenia test new
            </h1>
            <p 
              className="lead mb-5 hero-subtitle" 
              style={{fontFamily: 'Manrope', fontSize: '1.125rem', fontWeight: 500}}
            >
              Ponad 30 lat doświadczenia w budowie domów jednorodzinnych. Kompleksowa realizacja od projektu do wykończenia.
            </p>
            <Button 
              variant="ghost"
              size="large"
              className="pulse-button"
              style={{
                borderColor: '#FFA74E',
                color: '#FFA74E',
                minWidth: '320px'
              }}
            >
              Zobacz zrealizowane domy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};