import React from 'react';
import SidebarItem from './SidebarItem';
import { HomeIcon, CogIcon, UserGroupIcon, FolderIcon, MenuIcon } from '@heroicons/react/outline';

const Sidebar = () => {
    const menuItems = [
        { title: 'Systems', icon: <HomeIcon />, active: false },
        { title: 'System Code', icon: <CogIcon />, active: false },
        { title: 'Properties', icon: <CogIcon />, active: false },
        { title: 'Menus', icon: <CogIcon />, active: true },
        { title: 'API List', icon: <UserGroupIcon />, active: false },
        { title: 'Users & Group', icon: <FolderIcon />, active: false },
        { title: 'Competition', icon: <FolderIcon />, active: false },
    ];

    return (
        <div className="relative w-64 bg-gray-900 text-white h-full">
            <div className="p-4 font-bold text-xl flex justify-between items-center">
                <span>CLOIT</span>
                <MenuIcon className="w-6 h-6 cursor-pointer" />
            </div>
            <aside className="w-64" aria-label="Sidebar">
                <div className="px-3 py-4 overflow-y-auto rounded">
                    <ul className='space-y-2'>
                        {menuItems.map((item, index) => (
                            <SidebarItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                active={item.active}
                            />
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
