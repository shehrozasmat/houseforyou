import React from 'react';
import { Button } from '../components/ui/Button';

export const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      image: '/strzeniówka51 1.png',
      title: 'Warszawa',
      description: 'Realizacja na terenie Warszawy\nWykonawca: House-4-you',
    },
    {
      image: '/thumb2 1.png', 
      title: 'Warszawa',
      description: 'Realizacja na terenie Warszawy\nWykonawca: House-4-you',
    },
    {
      image: '/ursus 1.png',
      title: 'Warszawa', 
      description: 'Realizacja na terenie Warszawy\nWykonawca: House-4-you',
    },
  ];

  return (
    <section className="py-16" style={{ background: 'linear-gradient(121.01deg, rgba(249, 246, 241, 0.5) 26.39%, #FFFFFF 57.32%)' }}>
      <div className="container mx-auto px-5">
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-extrabold text-primary mb-8"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 800,
              fontSize: '48px',
              lineHeight: '48px',
              color: '#082924',
            }}
          >
            Blog - Przewodnik dla inwestorów
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
              Budowa domu to jedna z najważniejszych decyzji w życiu dla osób które chcą podjąć takie wyzwanie. 
              Chcemy, abyś czuł się pewnie na każdym etapie – od wyboru projektu i zakupu działki, przez sprawy prawne, 
              aż po finalne wykończenie. Dlatego stworzyliśmy Kompendium Wiedzy (Blog), które pozwala przeanalizować 
              wszystkie koszty budowy domu – od A do Z.
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-4">
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded overflow-hidden">
              <div 
                className="w-full h-72 bg-gray-300 rounded"
                style={{
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="pt-4">
                <p 
                  className="text-lg font-semibold text-black"
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: '#000000',
                  }}
                >
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outlined"
            style={{
              borderColor: '#FFA74E',
              color: '#0A332D',
            }}
          >
            Zobacz blog
          </Button>
        </div>
      </div>
    </section>
  );
}; 