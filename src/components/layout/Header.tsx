import React from 'react';

export const Header: React.FC = () => {
  const navItems = [
    { label: 'Strona główna', href: '/' },
    { label: 'O nas', href: '/o-nas' },
    { label: 'Realizacje', href: '/realizacje' },
    { label: 'Opinie', href: '/opinie' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-5">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <div 
              className="text-white font-bold text-xl"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 800,
                fontSize: '24px',
                color: '#FFFFFF',
              }}
            >
              House-4-You
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-semibold text-sm uppercase tracking-wider hover:text-secondary transition-colors"
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '22px',
                  letterSpacing: '0.03em',
                  color: '#FFFFFF',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-white">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}; 