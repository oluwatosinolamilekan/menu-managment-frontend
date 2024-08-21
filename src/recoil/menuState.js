// src/atoms/menuState.js

import { atom } from 'recoil';

export const menuState = atom({
    key: 'menuState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
