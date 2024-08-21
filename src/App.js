import React, { useState } from 'react';
import MainLayout from './components/templates/MainLayout';
import Input from './components/atoms/Input';
import Button from './components/atoms/Button';
import Label from './components/atoms/Label';
import HierarchicalMenu  from './components/organisms/HierarchicalMenu';
import { HomeIcon, CogIcon, UserGroupIcon, FolderIcon, MenuIcon } from '@heroicons/react/outline';

function App() {
    return (
        <MainLayout>
            <div className="flex items-center space-x-2 mb-4">
                <FolderIcon className="h-8 w-8 text-gray-700 "/>
                /  <h1 className="text-1xl ">Menus</h1>
            </div>
        
            
            <div className="mt-8 rounded-lg p-6">
             <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-blue-800 p-2 rounded-full">
                        <FolderIcon className="h-8 w-8 text-white" />
                    </div>
                    <label className="text-lg font-medium">Menus</label>
                </div>
                <div className="flex justify-between items-center">
                    <select className="h-full rounded border-gray-300 ml-4 p-2 py-0 pl-2 pr-7">
                        <option>System Management</option>
                    </select>
                </div>
            </div>`


            {/* Split Screen Layout */}
            <div className="flex space-x-8">
                {/* Left Side - Hierarchical Menu */}
                <div className="w-1/2">
                    <HierarchicalMenu />
                </div>

                {/* Right Side - CRUD Input Fields */}
                <div className="w-1/2">
                    <form className="space-y-4">
                        <div>
                            <Label text="Menu ID" />
                            <Input type="text" placeholder="56320ee9-6af6-11ed-a7ba-f220afe5e4a9" className="w-1/2" />
                        </div>
                        <div>
                            <Label text="Depth" />
                            <Input type="text" placeholder="3" />
                        </div>
                        <div>
                            <Label text="Parent Data" />
                            <Input type="text" placeholder="Systems" />
                        </div>
                        <div>
                            <Label text="Name" />
                            <Input type="text" placeholder="System Code" />
                        </div>
                        <div className="flex space-x-4">
                            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}

export default App;
