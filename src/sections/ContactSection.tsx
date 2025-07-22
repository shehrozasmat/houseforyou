import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section 
      className="relative py-24"
      style={{
        backgroundImage: `url('/image contact form.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#0A332D' }}
      />
      
      <div className="relative z-10 container mx-auto px-5">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-12">
            <h2 
              className="text-3xl md:text-4xl font-normal text-secondary mb-4"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '44px',
                color: '#FFA74E',
              }}
            >
              Nie przekonaliśmy Cię?
            </h2>
            <h3 
              className="text-3xl md:text-4xl font-bold text-secondary"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '44px',
                color: '#FFA74E',
              }}
            >
              Napisz i umów się na rozmowę
            </h3>
          </div>

          <button 
            className="px-8 py-6 rounded font-bold transition-colors"
            style={{
              background: 'linear-gradient(90deg, rgba(13, 56, 49, 0.95) 0%, rgba(38, 116, 102, 0) 100%), rgba(15, 66, 58, 0.9)',
              border: '2px solid #244641',
              color: '#FFA74E',
              fontFamily: 'Manrope',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '25px',
              minWidth: '392px',
              height: '72px',
            }}
          >
            Zobacz dowody na naszą rzetelność
          </button>
        </div>
      </div>
    </section>
  );
}; 