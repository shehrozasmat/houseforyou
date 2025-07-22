import React from 'react';

export const MissionSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1660px] mx-auto px-5">
        <div className="flex flex-col items-center text-center">
          
          <div className="max-w-[800px] mx-auto mb-12">
            <h2 
              className="mb-4"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 800,
                fontSize: '48px',
                lineHeight: '62px',
                color: '#082924',
                textAlign: 'center',
              }}
            >
              Dlaczego warto nam zaufać?
            </h2>
            <p 
              className="mb-8"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '30px',
                color: '#6C8581',
                textAlign: 'center',
              }}
            >
              Stoją za nami lata doświadczeń
            </p>
          </div>

          <div className="max-w-[800px] mx-auto mb-12">
            <p 
              className="mb-6"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '32px',
                color: '#082924',
                textAlign: 'center',
              }}
            >
              Misją House-4-You jest kompleksowe budowanie wysokiej jakości domów jednorodzinnych, 
              dopasowanych do indywidualnych potrzeb naszych klientów, w całej Polsce.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-8">
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div 
              className="p-12 rounded-lg"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 800,
                  fontSize: '24px',
                  lineHeight: '32px',
                  color: '#082924',
                }}
              >
                Dlaczego warto nam zaufać?
              </h3>
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: '#103D36',
                }}
              >
                Stoją za nami lata doświadczeń
              </p>
              <div 
                className="text-center py-6 px-4 rounded"
                style={{
                  backgroundColor: '#FFA74E',
                  color: '#0A332D',
                  fontFamily: 'Manrope',
                  fontWeight: 800,
                  fontSize: '16px',
                  lineHeight: '22px',
                }}
              >
                Metraż domu 200-250m2
              </div>
            </div>

            <div 
              className="p-12 rounded-lg"
              style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 800,
                  fontSize: '24px',
                  lineHeight: '32px',
                  color: '#082924',
                }}
              >
                Dlaczego warto nam zaufać?
              </h3>
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: '#103D36',
                }}
              >
                Stoją za nami lata doświadczeń
              </p>
              <div 
                className="text-center py-6 px-4 rounded"
                style={{
                  backgroundColor: '#CED6D5',
                  color: '#020A09',
                  fontFamily: 'Manrope',
                  fontWeight: 800,
                  fontSize: '16px',
                  lineHeight: '22px',
                }}
              >
                telefon: 606 730 239
              </div>
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
              minWidth: '358px',
              height: '72px',
              cursor: 'pointer',
            }}
          >
            Zobacz dowody na naszą rzetelność
          </button>
        </div>
      </div>
    </section>
  );
}; 