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
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '3rem', fontWeight: 800}}
            >
              Budujemy Twoje marzenia
            </h2>
            <p 
              className="fs-4 fw-semibold mb-4" 
              style={{fontFamily: 'Manrope', color: '#6C8581', fontSize: '1.25rem', fontWeight: 400}}
            >
              To, co najważniejsze
            </p>
            <p 
              className="lead fw-bold mb-4" 
              style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.125rem', fontWeight: 500, lineHeight: '1.6'}}
            >
              Misją House-4-You jest kompleksowe budowanie wysokiej jakości domów jednorodzinnych, 
              dopasowanych do indywidualnych potrzeb naszych klientów, w całej Polsce.
            </p>
            <div className="d-flex align-items-center justify-content-center mb-4">
              <div style={{width: '3px', height: '24px', backgroundColor: '#9DADAB'}} className="me-2"></div>
              <span className="fw-bold" style={{fontFamily: 'Manrope', color: '#6C8581'}}>więcej</span>
            </div>
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