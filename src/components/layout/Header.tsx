import React from 'react';
import { getImagePath } from '../../utils/imagePath';

export const Header: React.FC = () => {
  const navItems = [
    { label: 'STRONA GŁÓWNA', href: '/' },
    { label: 'O NAS', href: '/o-nas' },
    { label: 'REALIZACJE', href: '/realizacje' },
    { label: 'OPINIE', href: '/opinie' },
    { label: 'BLOG', href: '/blog' },
    { label: 'KONTAKT', href: '/kontakt' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100" style={{zIndex: 1050}}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#" style={{fontFamily: 'Manrope'}}>
          <img 
            src={getImagePath('/house4you-logo.png')} 
            alt="House-4-You Logo" 
            style={{
              height: '40px',
              width: 'auto'
            }}
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item">
                <a 
                  className="nav-link text-uppercase fw-semibold" 
                  href={item.href}
                  style={{
                    fontFamily: 'Manrope',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '22px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
