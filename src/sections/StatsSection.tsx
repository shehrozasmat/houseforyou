import React from 'react';
import { getImagePath } from '../utils/imagePath';

export const StatsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Anna',
      text: 'Chcę wyrazić swoje podziękowania',
      image: getImagePath('/Zbyszek.png'),
    },
    {
      name: 'Zbyszek', 
      text: 'Chcę wyrazić swoje podziękowania',
      image: getImagePath('/Zbyszek.png'),
    },
    {
      name: 'Robert',
      text: 'Chcę wyrazić swoje podziękowania', 
      image: getImagePath('/michal (1) 1.png'),
    },
  ];

  const stats = [
    {
      number: '150+',
      label: 'wybudowanych domów',
    },
    {
      number: '30',
      label: 'lat doświadczenia w branży',
    },
    {
      number: '10',
      label: 'lat na rynku',
    },
    {
      number: '30+',
      label: 'pracowników',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        
        <div className="max-w-4xl mx-auto mb-16">
          <h2 
            className="text-4xl font-bold text-text-light mb-8"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 700,
              fontSize: '36px',
              lineHeight: '49px',
              color: '#103D36',
            }}
          >
            Budowa domu, krok po kroku
          </h2>
          
          <div className="mb-8">
            <p 
              className="text-lg font-bold text-primary leading-relaxed"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '32px',
                color: '#0A332D',
              }}
            >
              Posiadając ponad 30 lat doświadczenia w budowie domów jednorodzinnych oraz budynków biurowych, 
              zrealizowaliśmy ponad 2500 projektów. Każdy obiekt to unikalna historia, a nasza praca opiera się 
              na wieloletniej wiedzy i rzetelnym podejściu do inwestycji.
            </p>
            
            <div className="flex items-center gap-2 mt-4">
              <div className="w-1 h-6" style={{ backgroundColor: '#9DADAB' }}></div>
              <span 
                className="text-text-muted font-bold"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#6C8581',
                }}
              >
                więcej
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 mb-16">
          <button className="p-2">
            <svg width="20" height="32" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#445946', transform: 'rotate(180deg)' }}>
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300"
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <h3 
                  className="text-lg font-bold text-primary mb-2"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#0A332D',
                  }}
                >
                  {testimonial.name}
                </h3>
                <p 
                  className="text-lg font-medium text-primary"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#0A332D',
                  }}
                >
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          <button className="p-2">
            <svg width="20" height="32" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#445946' }}>
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-16">
          <div className="w-5 h-5 rounded-full bg-gray-300"></div>
          <div className="w-5 h-5 rounded-full bg-secondary"></div>
          <div className="w-5 h-5 rounded-full bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded"
              style={{
                background: 'linear-gradient(0.71deg, rgba(255, 255, 255, 0.8) 12.97%, rgba(255, 242, 225, 0.64) 75.22%, rgba(255, 251, 248, 0.8) 88.39%)',
                boxShadow: '0px 4px 10px rgba(16, 61, 54, 0.1)',
              }}
            >
              <div 
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 800,
                  fontSize: '64px',
                  lineHeight: '87px',
                  letterSpacing: '-0.04em',
                  background: 'linear-gradient(180deg, #0D3831 0%, #115C50 31.73%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.number}
              </div>
              <p 
                className="text-sm text-gray-600 font-medium"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 