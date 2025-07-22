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
    <footer 
      className="py-16"
      style={{ backgroundColor: '#FFFBF8' }}
    >
      <div className="max-w-[1660px] mx-auto px-5 text-center">
        
        <div className="mb-14">
          <div 
            className="mb-2"
            style={{
              fontFamily: 'Manrope',
              fontWeight: 800,
              fontSize: '24px',
              color: '#0A332D',
            }}
          >
            House-4-You
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-8 md:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:opacity-70"
              style={{
                fontFamily: 'Manrope',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '22px',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                color: '#0A332D',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div 
          className="mt-12 pt-8"
          style={{ borderTop: '1px solid #E5E5E5' }}
        >
          <p 
            style={{
              fontFamily: 'Manrope',
              fontSize: '14px',
              color: '#6B7280',
            }}
          >
            © 2024 House-4-You. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}; 