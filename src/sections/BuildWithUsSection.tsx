import React from 'react';
import { getImagePath } from '../utils/imagePath';
import { Button } from '../components/ui/Button';

export const BuildWithUsSection: React.FC = () => {
  return (
    <section 
      className="py-5" 
      style={{
        background: 'linear-gradient(180deg, rgba(114, 126, 124, 0.05) 0%, rgba(255, 255, 255, 0.05) 8.65%, rgba(132, 145, 143, 0.05) 100%), linear-gradient(94.61deg, rgba(108, 133, 129, 0.05) 9.41%, rgba(255, 255, 255, 0.05) 53.73%)'
      }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 
              className="fw-bold mb-3" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '2.5rem', fontWeight: 800}}
            >
              Zbuduj z nami swój dom
            </h2>
            <p 
              className="mb-4" 
              style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '1.125rem', fontWeight: 400}}
            >
              Trzy tematy, które nas wyróżniają to:
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="row mb-5">
          {/* Left Side - Features */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {/* Kompleksowość */}
              <div className="p-4" style={{borderLeft: '4px solid #FFA74E', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '0px'}}>
                <h4 
                  className="fw-bold mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.5rem'}}
                >
                  Kompleksowość
                </h4>
                <p 
                  className="mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '0.95rem', lineHeight: '1.6'}}
                >
                  Budowa domów, budynków biurowych zajmujemy się kompleksowo, od a do z. 
                  Możemy pomóc w znalezieniu działki, dokumentach i pozwoleniach na budowę, 
                  przyłącza budowlania, adaptacja projektów, dobór że na zaprojektowania od 
                  podstaw domu, budynku biurowego. Następnie zajmujemy się samym 
                  wykonawstwem pod klucz, czyli realizujemy stan surowy, prace 
                  deweloperskie, prace wykończeniowe, prace zagospodarowania terenu, 
                  ogrodowe, ogrodzenie. Na koniec odbieramy budynek do użytkowania 
                  i gmi.
                </p>
                <span 
                  className="text-decoration-none" 
                  style={{fontFamily: 'Manrope', color: '#FFA74E', fontSize: '0.9rem', fontWeight: 500}}
                >
                  [ więcej ]
                </span>
              </div>

              {/* Doświadczenie */}
              <div className="p-4" style={{borderLeft: '4px solid #FFA74E', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '0px'}}>
                <h4 
                  className="fw-bold mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.5rem'}}
                >
                  Doświadczenie
                </h4>
                <p 
                  className="mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '0.95rem', lineHeight: '1.6'}}
                >
                  Budowa domów zajmujemy się już od ponad 30 lat.
                </p>
                <span 
                  className="text-decoration-none" 
                  style={{fontFamily: 'Manrope', color: '#FFA74E', fontSize: '0.9rem', fontWeight: 500}}
                >
                  [ więcej ]
                </span>
              </div>

              {/* Gwarancja 10 lat */}
              <div className="p-4" style={{borderLeft: '4px solid #FFA74E', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '0px'}}>
                <h4 
                  className="fw-bold mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.5rem'}}
                >
                  Gwarancja 10 lat
                </h4>
                <p 
                  className="mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '0.95rem', lineHeight: '1.6'}}
                >
                  Gwarantujemy wysoką jakość.
                </p>
                <span 
                  className="text-decoration-none" 
                  style={{fontFamily: 'Manrope', color: '#FFA74E', fontSize: '0.9rem', fontWeight: 500}}
                >
                  [ więcej ]
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6">
            <div
                className="position-relative h-100 d-flex align-items-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${getImagePath('/873c4431489016c33a4ff23372aa07e81f3b6278.jpg')}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '0px',
                  padding: '25px',
                  minHeight: '400px',
                }}
            >
              <div className="text-left text-white">
                <h3
                    className="fw-bold mb-4"
                    style={{fontFamily: 'Manrope', fontSize: '2rem', color: '#FFFFFF'}}
                >
                  Budujemy domy<br/>pod klucz
                </h3>
                <Button
                    variant="filled"
                    style={{
                      backgroundColor: '#FFA74E',
                      borderColor: '#FFA74E',
                      color: '#FFFFFF',
                      fontFamily: 'Manrope',
                      fontWeight: 600,
                      padding: '8px 24px'
                    }}
                >
                  Zobacz zrealizowane domy
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 p-4" style={{border: 'none', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
              <div className="card-body text-center">
                <h5 
                  className="card-title fw-bold mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.5rem', fontWeight: 700}}
                >
                  Kompleksowość
                </h5>
                <p 
                  className="card-text" 
                  style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '0.95rem', lineHeight: '1.6'}}
                >
                  Budowa domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki...
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 p-4" style={{border: 'none', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
              <div className="card-body text-center">
                <h5 
                  className="card-title fw-bold mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.5rem', fontWeight: 700}}
                >
                  Doświadczenie
                </h5>
                <p 
                  className="card-text" 
                  style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '0.95rem', lineHeight: '1.6'}}
                >
                  Budowa domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki...
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 p-4" style={{border: 'none', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
              <div className="card-body text-center">
                <h5 
                  className="card-title fw-bold mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.5rem', fontWeight: 700}}
                >
                  Gwarancja 10 lat
                </h5>
                <p 
                  className="card-text" 
                  style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '0.95rem', lineHeight: '1.6'}}
                >
                  Budowa domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 