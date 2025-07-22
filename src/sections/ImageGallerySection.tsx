import React from 'react';

export const ImageGallerySection: React.FC = () => {
  const galleryImages = [
    '/Rectangle 57.png',
    '/Rectangle 58.png', 
    '/Rectangle 59.png',
    '/Rectangle 60.png',
    '/Rectangle 61.png',
    '/Rectangle 62.png',
  ];

  return (
    <section 
      className="py-16"
      style={{ 
        background: 'linear-gradient(91.65deg, rgba(206, 214, 213, 0.1) 29.41%, rgba(255, 255, 255, 0.5) 80.68%)'
      }}
    >
      <div className="max-w-[1660px] mx-auto px-5">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 
            className="mb-8"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 800,
              fontSize: '64px',
              lineHeight: '64px',
              color: '#0A332D',
              textAlign: 'center',
            }}
          >
            30 lat doświadczeń
          </h2>
          
          <div className="mb-8">
            <p 
              style={{
                fontFamily: 'Manrope',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '32px',
                color: '#0A332D',
                textAlign: 'center',
              }}
            >
              Od ponad 30 lat zajmujemy się budową domów, zdobywając cenne doświadczenie w realizacji inwestycji. 
              Jednym z najtrudniejszych okresów był rok 2007, kiedy krach na światowych giełdach spowodował gwałtowny wzrost cen materiałów budowlanych. 
              Wobec konieczności utrzymania stałych cen dla Inwestorów, zmuszeni byliśmy do intensywnych negocjacji z dostawcami. 
              Choć wyzwania trwały do 2008 roku, kiedy wysokie koszty zahamowały popyt i wywołały kryzys w branży, 
              pozytywnym aspektem było ustabilizowanie cen materiałów i robocizny.
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-4">
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
            className="transition-colors mb-16"
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
              minWidth: '304px',
              height: '72px',
              cursor: 'pointer',
            }}
          >
            Zobacz dowody na naszą rzetelność
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="rounded"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '258px',
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}; 