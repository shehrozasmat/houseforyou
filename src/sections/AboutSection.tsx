import React from 'react';
import { getImagePath } from '../utils/imagePath';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="lg:w-1/2 relative">
            <div 
              className="w-full h-96 lg:h-[658px] bg-gray-300 rounded-lg relative"
              style={{
                backgroundImage: `url('${getImagePath('/houseforyou/image about.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div 
                className="absolute inset-0 bg-white bg-opacity-90 p-12 rounded-lg"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
              >
                <h2 
                  className="text-4xl font-bold text-primary mb-8"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 700,
                    fontSize: '36px',
                    lineHeight: '49px',
                    color: '#0A332D',
                  }}
                >
                  Nasza misja
                </h2>

                <div className="space-y-6">
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
                    House-4-You Sp. z o.o. dąży do budowania domów i budynków usługowych w całej Polsce. 
                    Podstawowym celem realizowanych domów jest wysoka jakość, którą firma chce zrealizować 
                    poprzez nowoczesne technologie murowane. Ponadto celem jest budowanie domów energooszczędnych 
                    z zastosowaniem bardzo dobrych materiałów izolacyjnych, jak wysokiej jakości styropiany oraz wełna mineralna.
                  </p>

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
                    Każdy zastosowany materiał na budowie musi być ekologiczny i energooszczędny. Budowane domy mogą mieć 
                    zastosowane nowoczesne urządzenia takie jak: pompy ciepła powietrzne lub gruntowe, nowoczesne piece gazowe, 
                    fotowoltaika, rekuperacja, klimatyzacja, „inteligentny dom". Dążymy do stosowania nowoczesnych rozwiązań dachowych.
                  </p>

                  <div className="flex items-center gap-2">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
