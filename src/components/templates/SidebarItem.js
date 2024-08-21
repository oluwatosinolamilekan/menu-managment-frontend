// src/components/template/SidebarItem.js

import React from 'react';

const SidebarItem = ({ icon, title, active }) => {
    return (
        <li className={`pl-4 py-2 flex items-center cursor-pointer hover:bg-gray-800 ${active ? 'bg-green-500' : ''}`}>
            <span className="w-6 h-6 mr-2 text-gray-400">{icon}</span>
            <span>{title}</span>
        </li>
    );
};

export default SidebarItem;
