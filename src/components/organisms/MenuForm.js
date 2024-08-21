import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { menuState } from '../../recoil/menuState';

function MenuForm() {
  const [menus, setMenus] = useRecoilState(menuState);
  const [newMenu, setNewMenu] = useState({ name: '', parentId: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMenus([...menus, { ...newMenu, id: Date.now() }]);
    setNewMenu({ name: '', parentId: null });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        value={newMenu.name} 
        onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
        placeholder="Menu Name" 
        className="input-class" 
      />
      <button type="submit" className="btn-class">Add Menu</button>
    </form>
  );
}

export default MenuForm;
