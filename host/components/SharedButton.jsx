import React from 'react';

const SharedButton = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all active:scale-95 ${className}`}
    >
      {children || 'Shared Button'}
    </button>
  );
};

export default SharedButton;
