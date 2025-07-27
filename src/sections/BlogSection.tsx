import React from 'react';
import { Button } from '../components/ui/Button';

export const BlogSection: React.FC = () => {
  return (
    <section 
      className="py-5"
      style={{
        background: 'linear-gradient(121.01deg, rgba(249, 246, 241, 0.5) 26.39%, #FFFFFF 57.32%)'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 
              className="display-5 fw-bold mb-3" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '3rem', fontWeight: 700}}
            >
              Blog
            </h2>
            <p 
              className="fs-4 mb-4" 
              style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '1.25rem', fontWeight: 400}}
            >
              Przewodnik dla inwestorów
            </p>
            <p 
              className="mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto'}}
            >
              Budowa domu to jedna z najważniejszych decyzji w życiu dla osób które chcą podjąć takie 
              wyzwanie. Chcemy, abyś czuł się pewnie na każdym etapie - od wyboru projektu i zakupu 
              działki, przez sprawy prawne, aż po finalne wykończenie.
            </p>
            <p 
              className="mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto'}}
            >
              Dlatego stworzyliśmy Kompendium Wiedzy (Blog), które pozwala przeanalizować wszystkie 
              koszty budowy domu - od A do Z.
            </p>
            <div className="d-flex align-items-center justify-content-center mb-5">
              <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
              <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-lg-4">
            <div className="card border-0 h-100" style={{borderRadius: '12px', overflow: 'hidden'}}>
              <img 
                src="/project1.jpg" 
                className="card-img-top" 
                alt="Warszawa project" 
                style={{height: '250px', objectFit: 'cover'}}
              />
              <div className="card-body p-4">
                <h5 
                  className="card-title mb-2" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontWeight: 600}}
                >
                  Warszawa
                </h5>
                <p 
                  className="card-text" 
                  style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '0.9rem'}}
                >
                  Realizacja na terenie Warszawy<br/>
                  Wykonawca: House-4-you
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 h-100" style={{borderRadius: '12px', overflow: 'hidden'}}>
              <img 
                src="/project2.jpg" 
                className="card-img-top" 
                alt="Warszawa project" 
                style={{height: '250px', objectFit: 'cover'}}
              />
              <div className="card-body p-4">
                <h5 
                  className="card-title mb-2" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontWeight: 600}}
                >
                  Warszawa
                </h5>
                <p 
                  className="card-text" 
                  style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '0.9rem'}}
                >
                  Realizacja na terenie Warszawy<br/>
                  Wykonawca: House-4-you
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 h-100" style={{borderRadius: '12px', overflow: 'hidden'}}>
              <img 
                src="/project3.jpg" 
                className="card-img-top" 
                alt="Warszawa project" 
                style={{height: '250px', objectFit: 'cover'}}
              />
              <div className="card-body p-4">
                <h5 
                  className="card-title mb-2" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontWeight: 600}}
                >
                  Warszawa
                </h5>
                <p 
                  className="card-text" 
                  style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '0.9rem'}}
                >
                  Realizacja na terenie Warszawy<br/>
                  Wykonawca: House-4-you
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <Button 
              variant="outlined"
              size="large"
              style={{
                borderColor: '#FFA74E',
                color: '#0A332D',
                fontWeight: 600,
                fontSize: '1rem',
                padding: '12px 32px',
                borderRadius: '8px'
              }}
            >
              Więcej artykułów
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};