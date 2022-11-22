import Link from 'next/link';
import styles from './navbar.module.css'

export default function Navbar(){

    return (
            <header className={styles.header}>
                <div className={styles.nav}>
                    {/*logo and name */}
                    <navelement className="flex flex-row items-center cursor-pointer ml-2">
                        <span className='text-3xl mr-2'>🥞</span>
                        <span className={styles.logotext}>Oliver Jarvis</span>
                    </navelement>

                    {/* navigation items */}
                    <navelement>
                        <ul className={styles.navitems}>
                            <li className="font-semibold text-black text-center">Home</li>
                            <li className="font-semibold text-black text-center">Web apps</li>
                            <li className="font-semibold text-black text-center">Games</li>
                            <li className="font-semibold text-black text-center">Resources</li>
                            <li className="font-semibold text-black text-center">Contact</li>
                        </ul>
                    </navelement>
                    
                    {/* hamburger menu @mobile*/}
                    <button className={styles.hamburger}>
                        <span className={styles.hamburgerbar}></span>
                        <span className={styles.hamburgerbar}></span>
                        <span className={styles.hamburgerbar}></span>
                    </button>
                </div>
            </header>
           );
    
}