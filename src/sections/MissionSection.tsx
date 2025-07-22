import React from 'react';
import { Button } from '../components/ui/Button';

export const MissionSection: React.FC = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <h2 
              className="display-5 fw-bold mb-3" 
              style={{fontFamily: 'Manrope', color: '#082924'}}
            >
              Dlaczego warto nam zaufać?
            </h2>
            <p 
              className="fs-4 fw-semibold mb-4" 
              style={{fontFamily: 'Manrope', color: '#6C8581'}}
            >
              Stoją za nami lata doświadczeń
            </p>
            <p 
              className="lead fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#082924', fontSize: '1.125rem'}}
            >
              Misją House-4-You jest kompleksowe budowanie wysokiej jakości domów jednorodzinnych, 
              dopasowanych do indywidualnych potrzeb naszych klientów, w całej Polsce.
            </p>
            <div className="d-flex align-items-center justify-content-center mb-4">
              <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
              <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100 p-4 fade-in">
              <div className="card-body text-center">
                <h5 
                  className="card-title fw-bold mb-3" 
                  style={{fontFamily: 'Manrope', color: '#082924'}}
                >
                  Dlaczego warto nam zaufać?
                </h5>
                <p 
                  className="card-text fw-bold mb-4" 
                  style={{fontFamily: 'Manrope', color: '#103D36'}}
                >
                  Stoją za nami lata doświadczeń
                </p>
                <div 
                  className="p-3 rounded fw-bold" 
                  style={{backgroundColor: '#FFA74E', color: '#0A332D', fontFamily: 'Manrope'}}
                >
                  Metraż domu 200-250m2
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100 p-4 fade-in">
              <div className="card-body text-center">
                <h5 
                  className="card-title fw-bold mb-3" 
                  style={{fontFamily: 'Manrope', color: '#082924'}}
                >
                  Dlaczego warto nam zaufać?
                </h5>
                <p 
                  className="card-text fw-bold mb-4" 
                  style={{fontFamily: 'Manrope', color: '#103D36'}}
                >
                  Stoją za nami lata doświadczeń
                </p>
                <div 
                  className="p-3 rounded fw-bold" 
                  style={{backgroundColor: '#CED6D5', color: '#020A09', fontFamily: 'Manrope'}}
                >
                  telefon: 606 730 239
                </div>
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
                color: '#0A332D'
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