import React from 'react';
import { getImagePath } from '../utils/imagePath';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Kompleksowość',
      description: 'Budową domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki,...',
    },
    {
      title: 'Doświadczenie', 
      description: 'Budową domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki,...',
    },
    {
      title: 'Gwarancja 10 lat',
      description: 'Budową domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki,...',
    },
  ];

  return (
    <section 
      className="py-16"
      style={{ 
        background: 'linear-gradient(180deg, rgba(157, 173, 171, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)'
      }}
    >
      <div className="max-w-[1660px] mx-auto px-5">

        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">

          <div className="lg:w-1/2">
            <h2 
              className="mb-8"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 800,
                fontSize: '48px',
                lineHeight: '66px',
                color: '#0A332D',
              }}
            >
              Zbuduj z nami swój dom
            </h2>

            <div className="mb-8">
              <p 
                className="mb-4"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '32px',
                  color: '#0A332D',
                }}
              >
                Firma House-4-You oferuje kompleksowe usługi budowlane, od dokumentów, pozwoleń, fundamentu, 
                przez stan surowy, deweloperski, prace pod klucz, zagospodarowanie terenu i ogród. Dbamy o każdy detal budowy. 
                Jakość potwierdzamy 10-cio letnią gwarancją. Z nami Twoje marzenie o budowie domu stanie się rzeczywistością.
              </p>

              <div className="flex items-center gap-2">
                <div 
                  className="w-1 h-6"
                  style={{ backgroundColor: '#9DADAB' }}
                ></div>
                <span 
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

            <button 
              className="transition-colors"
              style={{
                border: '2px solid #FFA74E',
                borderRadius: '4px',
                color: '#0A332D',
                backgroundColor: 'transparent',
                fontFamily: 'Manrope',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '25px',
                padding: '24px 32px',
                minWidth: '220px',
                height: '72px',
                cursor: 'pointer',
              }}
            >
              Przeglądaj projekty
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div 
              className="w-full rounded-lg"
              style={{
                backgroundImage: `url('${getImagePath('/houseforyou/promo banner desktop.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maxWidth: '600px',
                height: '400px',
              }}
            ></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-12 rounded-lg"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <h3 
                className="mb-6"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '36px',
                  color: '#0A332D',
                }}
              >
                {feature.title}
              </h3>
              <p 
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '36px',
                  color: '#000000',
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
