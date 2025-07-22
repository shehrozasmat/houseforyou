import React from 'react';
import { getImagePath } from '../utils/imagePath';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Anna',
      text: 'Chcę wyrazić swoje podziękowania',
      image: getImagePath('/houseforyou/Zbyszek.png'),
    },
    {
      name: 'Zbyszek', 
      text: 'Chcę wyrazić swoje podziękowania',
      image: getImagePath('/houseforyou/Zbyszek.png'),
    },
    {
      name: 'Robert',
      text: 'Chcę wyrazić swoje podziękowania', 
      image: getImagePath('/houseforyou/michal (1) 1.png'),
    },
  ];

  return (
    <section className="py-16" style={{ background: 'linear-gradient(121.01deg, rgba(249, 246, 241, 0.5) 26.39%, #FFFFFF 57.32%)' }}>
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
            Zbuduj z nami swój dom
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
              na wieloletniej wiedzy i rzetelnym podejściu do inwestycji. W budownictwie nie zawsze klienci mają 
              okazję poznać wszystkie wyzwania i pułapki, dlatego nasza kompleksowa oferta budowlana cieszy się dużym zaufaniem.
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

        <div className="flex items-center justify-center gap-8 mb-8">
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

        <div className="flex justify-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gray-300"></div>
          <div className="w-5 h-5 rounded-full bg-secondary"></div>
          <div className="w-5 h-5 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}; 
