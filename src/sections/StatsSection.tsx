import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-5" style={{background: 'linear-gradient(0.71deg, rgba(255, 255, 255, 0.8) 12.97%, rgba(255, 242, 225, 0.64) 75.22%, rgba(255, 251, 248, 0.8) 88.39%)'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 
              className="display-5 fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '3rem', fontWeight: 800}}
            >
              Budowa domu, krok po kroku
            </h2>
            <p 
              className="lead fw-bold" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem', fontWeight: 500, lineHeight: '1.6'}}
            >
              Posiadając ponad 30 lat doświadczenia w budowie domów jednorodzinnych oraz budynków biurowych, 
              zrealizowaliśmy ponad 2500 projektów. Każdy obiekt to unikalna historia, a nasza praca opiera się 
              na wieloletniej wiedzy i rzetelnym podejściu do inwestycji.
            </p>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
              <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6 col-md-3 mb-4">
            <div className="text-center">
              <div 
                className="display-3 fw-bold mb-2 stat-number" 
                style={{
                  fontFamily: 'Manrope',
                  fontSize: '4rem',
                  color: '#0A332D',
                  fontWeight: 800
                }}
              >
                150+
              </div>
              <p 
                className="small fw-medium mb-0" 
                style={{fontFamily: 'Manrope', color: '#6B7280'}}
              >
                wybudowanych domów
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="text-center">
              <div 
                className="display-3 fw-bold mb-2 stat-number" 
                style={{
                  fontFamily: 'Manrope',
                  fontSize: '4rem',
                  color: '#0A332D',
                  fontWeight: 800
                }}
              >
                30
              </div>
              <p 
                className="small fw-medium mb-0" 
                style={{fontFamily: 'Manrope', color: '#6B7280'}}
              >
                lat doświadczenia w branży
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="text-center">
              <div 
                className="display-3 fw-bold mb-2 stat-number" 
                style={{
                  fontFamily: 'Manrope',
                  fontSize: '4rem',
                  color: '#0A332D',
                  fontWeight: 800
                }}
              >
                10
              </div>
              <p 
                className="small fw-medium mb-0" 
                style={{fontFamily: 'Manrope', color: '#6B7280'}}
              >
                lat gwarancji
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="text-center">
              <div 
                className="display-3 fw-bold mb-2 stat-number" 
                style={{
                  fontFamily: 'Manrope',
                  fontSize: '4rem',
                  color: '#0A332D',
                  fontWeight: 800
                }}
              >
                30+
              </div>
              <p 
                className="small fw-medium mb-0" 
                style={{fontFamily: 'Manrope', color: '#6B7280'}}
              >
                pracowników
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};