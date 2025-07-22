import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-5" style={{backgroundColor: '#FFFBF8'}}>
      <div className="container text-center">
        <div className="mb-5">
          <h3 className="fw-bold mb-0" style={{fontFamily: 'Manrope', color: '#0A332D', fontSize: '1.5rem'}}>
            House-4-You
          </h3>
        </div>

        <nav className="mb-4">
          <div className="row justify-content-center">
            <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Strona główna</a></div>
            <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>O nas</a></div>
            <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Realizacje</a></div>
            <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Opinie</a></div>
            <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Blog</a></div>
            <div className="col-auto"><a href="#" className="text-decoration-none text-uppercase fw-semibold mx-3" style={{fontFamily: 'Manrope', color: '#0A332D'}}>Kontakt</a></div>
          </div>
        </nav>

        <div className="pt-4 border-top">
          <p className="mb-0" style={{fontFamily: 'Manrope', color: '#6B7280', fontSize: '0.875rem'}}>
            © 2024 House-4-You. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}; 