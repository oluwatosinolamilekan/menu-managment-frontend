import React from 'react';
import { useRecoilValue } from 'recoil';
import { menuState } from '../../recoil/menuState';
import TreeItem from '../molecules/TreeItem';

function MenuTree() {
  const menus = useRecoilValue(menuState);

  return (
    <div>
      {menus.map(menu => (
        <TreeItem key={menu.id} menu={menu} />
      ))}
    </div>
  );
}

export default MenuTree;
