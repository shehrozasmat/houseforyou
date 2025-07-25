import React from 'react';
import { getImagePath } from '../utils/imagePath';
import { Button } from '../components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section 
      className="position-relative vh-100 d-flex align-items-center" 
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(33, 26, 26, 0.84), rgba(33, 26, 26, 0.84)), url('${getImagePath('/tea-room-design.jpg')}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center text-white">
            <h1 
              className="display-2 fw-bold mb-4 hero-title" 
              style={{fontFamily: 'Manrope', fontSize: '2.5rem', lineHeight: '1.2', fontWeight: 700}}
            >
                <span className="hover-text" style={{transition: 'color 0.3s'}}>Pozwól nam zbudować </span>
                
                <span style={{color: '#FFA74E'}}>dla Ciebie Dom.</span>
            </h1>
            <p 
              className="lead mb-5 hero-subtitle" 
              style={{fontFamily: 'Manrope', fontSize: '2rem', fontWeight: 400}}
            >
              Miejsce, gdzie poczujesz się naprawdę dobrze.
            </p>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <Button 
                variant="filled"
                size="large"
                style={{
                  backgroundColor: '#0A5D57',
                  borderColor: '#0A5D57',
                  color: '#FFA74E',
                  minWidth: '280px',
                  minHeight: '74px',
                  fontWeight: 600
                }}
              >
                Oblicz koszty budowy domu
              </Button>
              <Button 
                variant="filled"
                size="large"
                style={{
                  backgroundColor: '#FFA74E',
                  borderColor: '#FFA74E',
                  color: '#FFFFFF',
                  minWidth: '280px',
                  minHeight: '74px',
                  fontWeight: 600
                }}
              >
                Znajdź projekt domu z wyceną
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};