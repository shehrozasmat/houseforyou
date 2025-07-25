import React from 'react';
import {getImagePath} from "../../utils/imagePath.ts";

export const Footer: React.FC = () => {
  const navItems = [
    { label: 'STRONA GŁÓWNA', href: '/' },
    { label: 'O NAS', href: '/o-nas' },
    { label: 'REALIZACJE', href: '/realizacje' },
    { label: 'OPINIE', href: '/opinie' },
    { label: 'BLOG', href: '/blog' },
    { label: 'KONTAKT', href: '/kontakt' },
  ];

  return (
    <footer className="py-5" style={{backgroundColor: '#FFFBF8'}}>
      <div className="container text-center">
        <div className="mb-5">
          <h3 
            className="fw-bold mb-0 d-flex align-items-center justify-content-center" 
            style={{
              fontFamily: 'Manrope', 
              color: '#0A332D', 
              fontSize: '1.5rem'
            }}
          >
         <img src={getImagePath('/h4y-color-1.png')}/>
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


      </div>
    </footer>
  );
};
