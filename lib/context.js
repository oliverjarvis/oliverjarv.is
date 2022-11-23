import { createContext } from 'react';

export const ScrollContext = createContext({
    scrolledTo: "",
    setScrolledTo: (a) => {},
    navState: "",
    setNavState: (a) => {},
});