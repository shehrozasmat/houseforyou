import React from 'react';

export const Footer: React.FC = () => {
  const navItems = [
    { label: 'Strona główna', href: '/' },
    { label: 'O nas', href: '/o-nas' },
    { label: 'Realizacje', href: '/realizacje' },
    { label: 'Opinie', href: '/opinie' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <footer className="py-5" style={{backgroundColor: '#FFFBF8'}}>
      <div className="container text-center">
        <div className="mb-5">
          <h3 
            className="fw-bold mb-0" 
            style={{
              fontFamily: 'Manrope', 
              color: '#0A332D', 
              fontSize: '1.5rem'
            }}
          >
            House-4-You
          </h3>
        </div>

        <nav className="mb-4">
          <div className="row justify-content-center">
            {navItems.map((item) => (
              <div key={item.label} className="col-auto">
                <a 
                  href={item.href} 
                  className="text-decoration-none text-uppercase fw-semibold mx-3" 
                  style={{
                    fontFamily: 'Manrope', 
                    color: '#0A332D',
                    fontSize: '16px',
                    lineHeight: '22px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </nav>

        <div className="pt-4 border-top">
          <p 
            className="mb-0" 
            style={{
              fontFamily: 'Manrope', 
              color: '#6B7280', 
              fontSize: '0.875rem'
            }}
          >
            © 2024 House-4-You. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
