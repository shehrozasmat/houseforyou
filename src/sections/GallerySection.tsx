import React from 'react';

export const GallerySection: React.FC = () => {
  const projects = [
    { image: '/strzeniówka51 1.png', description: 'Warszawa\nRealizacja na terenie Warszawy\nWykonawca: House-4-you' },
    { image: '/thumb2 1.png', description: 'Warszawa\nRealizacja na terenie Warszawy\nWykonawca: House-4-you' },
    { image: '/ursus 1.png', description: 'Warszawa\nRealizacja na terenie Warszawy\nWykonawca: House-4-you' },
    { image: '/strzeniówka51 1.png', description: 'Warszawa\nRealizacja na terenie Warszawy\nWykonawca: House-4-you' },
    { image: '/thumb2 1.png', description: 'Warszawa\nRealizacja na terenie Warszawy\nWykonawca: House-4-you' },
    { image: '/ursus 1.png', description: 'Warszawa\nRealizacja na terenie Warszawy\nWykonawca: House-4-you' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1660px] mx-auto px-5">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 
            className="mb-8"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 800,
              fontSize: '40px',
              lineHeight: '55px',
              color: '#0A332D',
              textAlign: 'center',
            }}
          >
            Na przestrzeni 30 lat zmieniły się trendy, jednak to, co pozostało niezmienne, 
            to jakość wybudowanych przez nas domów
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
                textAlign: 'center',
              }}
            >
              Firma budowlana House-4-You to dobre rozwiązanie dla Twojej inwestycji budowy domu. 
              Z nami zrealizujesz marzenie o własnym domu lub funkcjonalnym biurze od A do Z.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-6">
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

          <div className="flex items-center justify-center gap-4 mb-8">
            <span 
              style={{
                fontFamily: 'Manrope',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '25px',
                color: '#0A332D',
              }}
            >
              Przeglądaj projekty
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded overflow-hidden">
              <div 
                className="w-full h-72 rounded"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="pt-4">
                <p 
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#000000',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
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
              minWidth: '275px',
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