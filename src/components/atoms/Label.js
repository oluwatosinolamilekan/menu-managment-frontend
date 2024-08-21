// src/components/Label.js
import React from 'react';

const Label = ({ text, className = '' }) => (
    <label className={`block text-gray-700 ${className}`}>
        {text}
    </label>
);

export default Label;
