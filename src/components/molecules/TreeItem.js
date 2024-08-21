import React from 'react';

function TreeItem({ menu }) {
  return (
    <div className="ml-4">
      <span className="font-semibold">{menu.name}</span>
      {/* Render children menus recursively if any */}
      {menu.children && menu.children.length > 0 && (
        <div className="ml-4">
          {menu.children.map(child => (
            <TreeItem key={child.id} menu={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeItem;
