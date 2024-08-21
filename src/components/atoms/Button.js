// src/components/Button.js
import React from 'react';

const Button = ({ type = 'button', onClick, className = '', children }) => (
    <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded text-white font-medium ${className}`}
    >
        {children}
    </button>
);

export default Button;
