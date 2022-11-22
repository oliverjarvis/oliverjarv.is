import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}
