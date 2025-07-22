import React from 'react';
import { getImagePath } from '../utils/imagePath';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[800px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(33, 26, 26, 0.84), rgba(33, 26, 26, 0.84)), url('${getImagePath('/Header background.png')}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-[1660px] mx-auto px-5 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="mb-8"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 800,
              fontSize: '64px',
              lineHeight: '1.1',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            Budujemy Twoje marzenia test
          </h1>

          <p 
            className="mb-12 max-w-3xl mx-auto"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '1.5',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            Ponad 30 lat doświadczenia w budowie domów jednorodzinnych. Kompleksowa realizacja od projektu do wykończenia.
          </p>

          <button 
            className="transition-colors"
            style={{
              border: '2px solid #FFA74E',
              borderRadius: '4px',
              color: '#FFA74E',
              backgroundColor: 'transparent',
              fontFamily: 'Manrope',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '25px',
              padding: '24px 32px',
              minWidth: '320px',
              height: '72px',
              cursor: 'pointer',
            }}
          >
            Zobacz zrealizowane domy
          </button>
        </div>
      </div>
    </section>
  );
}; 
