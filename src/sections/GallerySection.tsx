import React from 'react';
import { getImagePath } from '../utils/imagePath';
import { Button } from '../components/ui/Button';

export const GallerySection: React.FC = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-left mb-5">
            <h2 
              className="display-6 fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '3rem', fontWeight: 800}}
            >
              Na przestrzeni 30 lat zmieniły się trendy, jednak to, co pozostało niezmienne, 
              to jakość wybudowanych przez nas domów
            </h2>
            <p 
              className="lead fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem', fontWeight: 500, lineHeight: '1.6'}}
            >
              Firma budowlana House-4-You to dobre rozwiązanie dla Twojej inwestycji budowy domu. 
              Z nami zrealizujesz marzenie o własnym domu lub funkcjonalnym biurze od A do Z.
            </p>
            <div className="d-flex align-items-center  mb-4">
              <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
              <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
            </div>
            <span 
              className="fw-bold" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}
            >
              Przeglądaj projekty
            </span>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div 
              className="rounded gallery-image-hover" 
              style={{
                backgroundImage: `url('${getImagePath('/project-strzeniowka.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px'
              }}
            ></div>
            <div className="mt-3">
              <p 
                className="fw-semibold mb-0" 
                style={{fontFamily: 'Manrope', color: '#000000'}}
              >
                Warszawa<br/>
                Realizacja na terenie Warszawy<br/>
                Wykonawca: House-4-you
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div 
              className="rounded gallery-image-hover" 
              style={{
                backgroundImage: `url('${getImagePath('/project-thumb2.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px'
              }}
            ></div>
            <div className="mt-3">
              <p 
                className="fw-semibold mb-0" 
                style={{fontFamily: 'Manrope', color: '#000000'}}
              >
                Warszawa<br/>
                Realizacja na terenie Warszawy<br/>
                Wykonawca: House-4-you
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div 
              className="rounded gallery-image-hover" 
              style={{
                backgroundImage: `url('${getImagePath('/project-ursus.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px'
              }}
            ></div>
            <div className="mt-3">
              <p 
                className="fw-semibold mb-0" 
                style={{fontFamily: 'Manrope', color: '#000000'}}
              >
                Warszawa<br/>
                Realizacja na terenie Warszawy<br/>
                Wykonawca: House-4-you
              </p>
            </div>
          </div>
        </div>
          <div className="row mb-5">
              <div className="col-md-4 mb-4">
                  <div
                      className="rounded gallery-image-hover"
                      style={{
                          backgroundImage: `url('${getImagePath('/project-strzeniowka.png')}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '300px'
                      }}
                  ></div>
                  <div className="mt-3">
                      <p
                          className="fw-semibold mb-0"
                          style={{fontFamily: 'Manrope', color: '#000000'}}
                      >
                          Warszawa<br/>
                          Realizacja na terenie Warszawy<br/>
                          Wykonawca: House-4-you
                      </p>
                  </div>
              </div>
              <div className="col-md-4 mb-4">
                  <div
                      className="rounded gallery-image-hover"
                      style={{
                          backgroundImage: `url('${getImagePath('/project-thumb2.png')}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '300px'
                      }}
                  ></div>
                  <div className="mt-3">
                      <p
                          className="fw-semibold mb-0"
                          style={{fontFamily: 'Manrope', color: '#000000'}}
                      >
                          Warszawa<br/>
                          Realizacja na terenie Warszawy<br/>
                          Wykonawca: House-4-you
                      </p>
                  </div>
              </div>
              <div className="col-md-4 mb-4">
                  <div
                      className="rounded gallery-image-hover"
                      style={{
                          backgroundImage: `url('${getImagePath('/project-ursus.png')}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '300px'
                      }}
                  ></div>
                  <div className="mt-3">
                      <p
                          className="fw-semibold mb-0"
                          style={{fontFamily: 'Manrope', color: '#000000'}}
                      >
                          Warszawa<br/>
                          Realizacja na terenie Warszawy<br/>
                          Wykonawca: House-4-you
                      </p>
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
                padding: '12px 32px'
              }}
            >
              Zobacz dowody na naszą rzetelność
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};