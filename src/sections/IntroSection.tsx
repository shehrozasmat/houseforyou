import React from 'react';
import { Button } from '../components/ui/Button';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h2 
              className="fw-bold mb-4" 
              style={{
                fontFamily: 'Manrope', 
                color: '#0A332D', 
                fontSize: '2.5rem', 
                fontWeight: 800
              }}
            >
              Budujemy Twoje marzenia
            </h2>
            <p 
              className="lead mb-4" 
              style={{
                fontFamily: 'Manrope', 
                color: '#6C8581', 
                fontSize: '1.25rem', 
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              To, co najważniejsze
            </p>
            <p 
              className="mb-5" 
              style={{
                fontFamily: 'Manrope', 
                color: '#0A332D', 
                fontSize: '1.125rem', 
                fontWeight: 400,
                lineHeight: '1.8',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              Misja House-4-You jest kompleksowe budowanie wysokiej jakości domów jednorodzinnych, 
              dopasowanych do indywidualnych potrzeb naszych klientów, w całej Polsce.
            </p>
            <div className="d-flex justify-content-center">
              <Button
                variant="filled"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: '#FFA74E',
                  color: '#FFA74E',
                  fontFamily: 'Manrope',
                  fontWeight: 600,
                  padding: '12px 32px',
                  fontSize: '1rem'
                }}
              >
                Zobacz dowody na naszą rzetelność
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 