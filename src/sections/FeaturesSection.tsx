import React from 'react';
import { getImagePath } from '../utils/imagePath';
import { Button } from '../components/ui/Button';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-5" style={{background: 'linear-gradient(180deg, rgba(157, 173, 171, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)'}}>
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 
              className="display-5 fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D'}}
            >
              Zbuduj z nami swój dom
            </h2>
            <p 
              className="lead fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem'}}
            >
              Firma House-4-You oferuje kompleksowe usługi budowlane, od dokumentów, pozwoleń, fundamentu, 
              przez stan surowy, deweloperski, prace pod klucz, zagospodarowanie terenu i ogród. Dbamy o każdy detal budowy. 
              Jakość potwierdzamy 10-cio letnią gwarancją. Z nami Twoje marzenie o budowie domu stanie się rzeczywistością.
            </p>
            <div className="d-flex align-items-center mb-4">
              <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
              <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
            </div>
            <Button 
              variant="outlined"
              size="large"
              style={{
                borderColor: '#FFA74E',
                color: '#0A332D'
              }}
            >
              Przeglądaj projekty
            </Button>
          </div>
          <div className="col-lg-6">
            <div 
              className="rounded gallery-image-hover" 
              style={{
                backgroundImage: `url('${getImagePath('/promo-banner-desktop.png')}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px'
              }}
            ></div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 p-4 text-center">
              <div className="card-body">
                <h5 
                  className="card-title fw-bold mb-4" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '2rem'}}
                >
                  Kompleksowość
                </h5>
                <p 
                  className="card-text" 
                  style={{fontFamily: 'Manrope', color: '#000000', fontSize: '1.125rem'}}
                >
                  Budową domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki,...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 p-4 text-center">
              <div className="card-body">
                <h5 
                  className="card-title fw-bold mb-4" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '2rem'}}
                >
                  Doświadczenie
                </h5>
                <p 
                  className="card-text" 
                  style={{fontFamily: 'Manrope', color: '#000000', fontSize: '1.125rem'}}
                >
                  Budową domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki,...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100 p-4 text-center">
              <div className="card-body">
                <h5 
                  className="card-title fw-bold mb-4" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '2rem'}}
                >
                  Gwarancja 10 lat
                </h5>
                <p 
                  className="card-text" 
                  style={{fontFamily: 'Manrope', color: '#000000', fontSize: '1.125rem'}}
                >
                  Budową domów, budynków biurowych zajmujemy się kompleksowo, od a do z. Możemy pomóc w znalezieniu działki,...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};