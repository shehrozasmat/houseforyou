import React from 'react';
import { Button } from '../components/ui/Button';

export const BuildingStepsSection: React.FC = () => {
  const steps = [
    'DZIAŁKA',
    'PROJEKT', 
    'BUDOWA',
    'DETALE'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-primary mb-8"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: '66px',
              color: '#0A332D',
            }}
          >
            Budowa domu krok po kroku
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="flex flex-col gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="border-2 border-primary bg-white rounded px-6 py-4 min-w-[128px] text-center"
                    style={{
                      borderColor: '#0A332D',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <span 
                      className="font-extrabold text-primary"
                      style={{
                        fontFamily: 'Manrope',
                        fontWeight: 800,
                        fontSize: '15px',
                        lineHeight: '36px',
                        color: '#0A332D',
                      }}
                    >
                      {step}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div 
                      className="w-0 h-4 my-2"
                      style={{
                        borderLeft: '2px solid #FFA74E',
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 flex justify-center">
            <div 
              className="w-full h-96 bg-gray-300 rounded-lg"
              style={{
                backgroundImage: `url('/Zrzut ekranu 2025-03-13 o 13.57.05.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maxWidth: '583px',
                height: '678px',
              }}
            ></div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-8">
              <h3 
                className="text-2xl font-bold text-primary mb-6"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '33px',
                  color: '#0A332D',
                }}
              >
                Proces budowy
              </h3>
              
              <p 
                className="text-lg font-bold text-primary leading-relaxed mb-4"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '32px',
                  color: '#0A332D',
                }}
              >
                Proces budowy jest złożony. Łatwiej wykonać go z zaufanym partnerem. Warto ponieść ten trud, 
                bo nagroda za wysiłek jest duża. Posiadanie wpływu na każdy aspekt budowy domu jest bezcenne. 
                Zaczynając od wyboru działki, projektu samej budowy Inwestor ma wpływ na każdy aspekt. 
                Nie dostanie się tego kupując gotową nieruchomość.
              </p>
              
              <div className="flex items-center gap-2 mb-6">
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

              <div className="space-y-4">
                <Button 
                  variant="outlined"
                  className="w-full"
                  style={{
                    borderColor: '#FFA74E',
                    color: '#0A332D',
                  }}
                >
                  Przeglądaj projekty
                </Button>
                
                <Button 
                  variant="outlined"
                  className="w-full"
                  style={{
                    borderColor: '#FFA74E',
                    color: '#0A332D',
                  }}
                >
                  Przeglądaj projekty
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 