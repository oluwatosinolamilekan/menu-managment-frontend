import React from 'react';
import MenuTree from '../organisms/MenuTree';
import MenuForm from '../organisms/MenuForm';

function MenuPage() {
  return (
    <div className="space-y-4">
      <MenuTree />
      <MenuForm />
    </div>
  );
}

export default MenuPage;
