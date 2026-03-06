import React from 'react';

const SharedButton = ({ onClick, children, className = '', style = {} }) => {
  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: 'var(--color-primary, #4f46e5)',
    color: '#ffffff',
    fontWeight: 600,
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'var(--font-family, sans-serif)',
    ...style
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      className={className}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = '#4338ca';
        e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = '#4f46e5';
        e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      }}
      onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
      onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
    >
      {children || 'Shared Button'}
    </button>
  );
};

export default SharedButton;
