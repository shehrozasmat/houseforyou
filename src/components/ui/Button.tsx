import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outlined' | 'ghost' | 'filled';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  style = {},
}) => {
  const getBaseClasses = () => {
    return 'inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border-2 border-secondary text-primary bg-transparent hover:bg-secondary hover:text-primary';
      case 'ghost':
        return 'border-2 border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-primary';
      case 'filled':
        return 'bg-gradient-to-r from-primary/95 to-primary/90 border-2 border-primary text-secondary hover:opacity-90';
      default:
        return 'bg-secondary text-primary border-2 border-secondary hover:bg-secondary/90';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-sm h-10 rounded';
      case 'large':
        return 'px-8 py-6 text-lg h-18 rounded-lg';
      default:
        return 'px-6 py-4 text-base h-[72px] rounded';
    }
  };

  const classes = `
    ${getBaseClasses()}
    ${getVariantClasses()}
    ${getSizeClasses()}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const buttonStyle = {
    fontFamily: 'Manrope',
    fontSize: '18px',
    lineHeight: '25px',
    textAlign: 'center' as const,
    fontWeight: 700,
    ...style,
  };

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
    >
      {children}
    </button>
  );
}; 