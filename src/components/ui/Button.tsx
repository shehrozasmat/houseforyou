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
    return 'btn d-inline-flex align-items-center justify-content-center fw-bold';
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'btn-outline-warning';
      case 'ghost':
        return 'btn-outline-warning';
      case 'filled':
        return '';
      default:
        return 'btn-warning';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'btn-sm px-4 py-2';
      case 'large':
        return 'btn-lg px-5 py-3';
      default:
        return 'px-4 py-3';
    }
  };

  const classes = `
    ${getBaseClasses()}
    ${getVariantClasses()}
    ${getSizeClasses()}
    ${disabled ? 'opacity-50' : ''}
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
