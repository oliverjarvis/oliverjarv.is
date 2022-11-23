import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/navbar";
import { ScrollContext } from "../lib/context";
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [scrolledTo, setScrolledTo] = useState("home");
  const [navState, setNavState] = useState("home");
  return (
    <div className="min-h-screen">
      <ScrollContext.Provider value={{scrolledTo, setScrolledTo, navState, setNavState}}>
        <Navbar/>
        <Component {...pageProps} />
      </ScrollContext.Provider>
    </div>
  );
}
