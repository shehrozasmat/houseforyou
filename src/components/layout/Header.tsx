import React from 'react';

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
      <div className="container-fluid px-5">
        <a className="navbar-brand fw-bold fs-4 d-flex align-items-center" href="#" style={{fontFamily: 'Manrope'}}>
          <span style={{color: '#FFFFFF'}}>HOUSE</span>
          <span style={{color: '#FFA74E', marginLeft: '2px'}}>4</span>
          <span style={{color: '#FFFFFF', marginLeft: '2px'}}>YOU</span>
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
