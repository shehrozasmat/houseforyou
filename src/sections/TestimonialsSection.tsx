import React from 'react';
import { getImagePath } from '../utils/imagePath';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-5" style={{background: 'background: linear-gradient(121.01deg, rgba(249, 246, 241, 0.5) 26.39%, #FFFFFF 57.32%);\n'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-left mb-5">
            <h2 
              className="display-5 fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '36px', fontWeight: 'bold'}}
            >
              Krótkie historie naszych klientów
            </h2>
            <p 
              className="lead fw-bold" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem', fontWeight: 500}}
            >
              Posiadając ponad 30 lat doświadczenia w budowie domów jednorodzinnych oraz budynków biurowych, zrealizowaliśmy ponad 2500 projektów.
            </p>
            <p>
              Każdy obiekt to unikalna historia, a nasza praca opiera się na wieloletniej wiedzy i rzetelnym podejściu do inwestycji. W budownictwie nie zawsze klienci mają okazję poznać wszystkie wyzwania i pułapki, dlatego nasza kompleksowa oferta budowlana cieszy się dużym zaufaniem.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="text-center testimonial-card">
              <div 
                className="rounded-circle mx-auto mb-3 gallery-image-hover" 
                style={{
                  backgroundImage: `url('${getImagePath('/testimonial-zbyszek.png')}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '128px',
                  height: '128px'
                }}
              ></div>
              <h5 
                className="fw-bold mb-2" 
                style={{fontFamily: 'Manrope', color: '#0A332D'}}
              >
                Anna
              </h5>
              <p 
                style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}
              >
                Chcę wyrazić swoje podziękowania za profesjonalne wykonanie naszego domu. Wszystko zostało zrealizowane zgodnie z planem.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center testimonial-card">
              <div 
                className="rounded-circle mx-auto mb-3 gallery-image-hover" 
                style={{
                  backgroundImage: `url('${getImagePath('/testimonial-zbyszek.png')}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '128px',
                  height: '128px'
                }}
              ></div>
              <h5 
                className="fw-bold mb-2" 
                style={{fontFamily: 'Manrope', color: '#0A332D'}}
              >
                Zbyszek
              </h5>
              <p 
                style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}
              >
                Doskonała obsługa na każdym etapie budowy. Polecam House-4-You wszystkim, którzy planują budowę domu.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="text-center testimonial-card">
              <div 
                className="rounded-circle mx-auto mb-3 gallery-image-hover" 
                style={{
                  backgroundImage: `url('${getImagePath('/testimonial-michal.png')}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '128px',
                  height: '128px'
                }}
              ></div>
              <h5 
                className="fw-bold mb-2" 
                style={{fontFamily: 'Manrope', color: '#0A332D'}}
              >
                Robert
              </h5>
              <p 
                style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}
              >
                Bardzo zadowoleni z efektu końcowego. Dom został wybudowany terminowo i w wysokiej jakości.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center gap-2">
              <div className="rounded-circle" style={{width: '12px', height: '12px', backgroundColor: '#E5E5E5'}}></div>
              <div className="rounded-circle" style={{width: '12px', height: '12px', backgroundColor: '#FFA74E'}}></div>
              <div className="rounded-circle" style={{width: '12px', height: '12px', backgroundColor: '#E5E5E5'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};