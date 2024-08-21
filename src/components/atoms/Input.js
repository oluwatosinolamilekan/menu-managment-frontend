// src/components/Input.js
import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, className = '' }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        
        className={`p-3 border rounded-md border-0 py-1.5 pr-30 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}

    />
);

export default Input;
