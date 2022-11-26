import Link from 'next/link';
import styles from './navbar.module.css'
import { useContext, useEffect, useState } from 'react';
import { ScrollContext } from '../lib/context';

export default function Navbar(){

    const {scrolledTo, setNavState} = useContext(ScrollContext);
    const [openMenu, setOpenMenu] = useState(false);

    return (
            <header className={styles.header}>
                <div className={styles.nav}>
                    {/*logo and name */}
                    <navelement className="flex flex-row items-center cursor-pointer ml-2">
                        <span className='text-3xl mr-2'>🫠</span>
                        <span className={styles.logotext}>Oliver Jarvis</span>
                    </navelement>

                    {/* navigation items */}
                    <navelement>
                        <ul className={styles.navitems}>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "home" ? "text-black" : "text-gray-400" )} onClick={() => setNavState("home")}>Home</li>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "blog" ? "text-black" : "text-gray-400" )} onClick={() => setNavState("blog")}>Blog</li>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "apps" ? "text-black" : "text-gray-400" )} onClick={() => setNavState("apps")}>Apps</li>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "games" ? "text-black" : "text-gray-400" )} onClick={() => setNavState("games")}>Games</li>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "resources" ? "text-black" : "text-gray-400" )} onClick={() => setNavState("resources")}>Resources</li>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "contact" ? "text-black" : "text-gray-400" )} onClick={() => setNavState("contact")}>Contact</li>
                        </ul>
                    </navelement>
                    
                    {/* hamburger menu @mobile*/}
                    <button className={styles.hamburger} onClick={() => setOpenMenu(!openMenu)}>
                        <span className={styles.hamburgerbar}></span>
                        <span className={styles.hamburgerbar}></span>
                        <span className={styles.hamburgerbar}></span>
                    </button>

                    {/* mobile menu */}
                    <div className={(openMenu ? styles.mobilemenu : "hidden")}>
                        <ul className={styles.mobilemenuitems}>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "home" ? "text-black" : "text-gray-400" )} onClick={() => {setNavState("home"); setOpenMenu(false);}}>Home</li>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "blog" ? "text-black" : "text-gray-400" )} onClick={() => {setNavState("blog"); setOpenMenu(false);}}>Blog</li>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "apps" ? "text-black" : "text-gray-400" )} onClick={() => {setNavState("apps"); setOpenMenu(false);}}>Apps</li>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "games" ? "text-black" : "text-gray-400" )} onClick={() => {setNavState("games"); setOpenMenu(false);}}>Games</li>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "resources" ? "text-black" : "text-gray-400" )} onClick={() => {setNavState("resources"); setOpenMenu(false);}}>Resources</li>
                            <li className={`cursor-pointer text-black text-center font-black ` + (scrolledTo == "contact" ? "text-black" : "text-gray-400" )} onClick={() => {setNavState("contact"); setOpenMenu(false);}}>Contact</li>
                        </ul>
                    </div>
                </div>
            </header>
           );
    
}