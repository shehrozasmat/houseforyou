import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-5" style={{background: 'background: linear-gradient(180deg, rgba(114, 126, 124, 0.05) 0%, rgba(255, 255, 255, 0.05) 8.65%, rgba(132, 145, 143, 0.05) 100%),\n' +
          'linear-gradient(94.61deg, rgba(108, 133, 129, 0.05) 9.41%, rgba(255, 255, 255, 0.05) 53.73%);'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 
              className="display-5 fw-bold mb-3" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '3rem', fontWeight: 800}}
            >
              Dlaczego warto nam zaufać?
            </h2>
            <p 
              className="fs-4 fw-semibold mb-4" 
              style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '1.25rem', fontWeight: 400}}
            >
              Stoją za nami lata doświadczeń
            </p>
            
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto">
                <p 
                  className="mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1rem', fontWeight: 400, lineHeight: '1.6'}}
                >
                  Firma House-4-You oferuje kompleksowe usługi budowlane, od dokumentów, pozwoleń, 
                  fundamentu, przez stan surowy, deweloperski, prace pod klucz, zagospodarowanie terenu 
                  i ogród.
                </p>
                <p 
                  className="mb-4" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1rem', fontWeight: 400, lineHeight: '1.6'}}
                >
                  Dbamy o każdy detal budowy. Jakość potwierdzamy 10-cio letnią gwarancją. 
                  Z nami Twoje marzenie o budowie domu stanie się rzeczywistością.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center mb-5">
              <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
              <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <div className="card shadow-sm h-100 p-4" style={{border: 'none', borderRadius: '8px'}}>
              <div className="card-body text-center">
                <h5 
                  className="card-title fw-bold mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.5rem', fontWeight: 700}}
                >
                  Oblicz koszty budowy domu
                </h5>
                <p 
                  className="card-text mb-4" 
                  style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '0.9rem'}}
                >
                  Skorzystaj z kalkulatora
                </p>
                <div 
                  className="p-3 rounded fw-bold" 
                  style={{backgroundColor: '#FFA74E', color: '#FFFFFF', fontFamily: 'Manrope', fontSize: '1rem'}}
                >
                  Metraż domu 200-250m2
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-4">
            <div className="card shadow-sm h-100 p-4" style={{border: 'none', borderRadius: '8px'}}>
              <div className="card-body text-center">
                <h5 
                  className="card-title fw-bold mb-3" 
                  style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.5rem', fontWeight: 700}}
                >
                  Nie wiesz od czego zacząć?
                </h5>
                <p 
                  className="card-text mb-4" 
                  style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '0.9rem'}}
                >
                  Skontaktuj się z nami, pomożemy Ci zrobić pierwszy krok
                </p>
                <div 
                  className="p-3 rounded fw-bold" 
                  style={{backgroundColor: '#CED6D5', color: '#0A332D', fontFamily: 'Manrope', fontSize: '1rem'}}
                >
                  telefon: 606 730 239
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};