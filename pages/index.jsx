import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { useRef, useEffect, useContext } from 'react';

import { ScrollContext  } from '../lib/context';

export default function Home() {

  const {scrolledTo, setScrolledTo, navState} = useContext(ScrollContext);

  const homeRef = useRef(null);
  const blogRef = useRef(null);
  const gamesRef = useRef(null);
  const appsRef = useRef(null);
  const resourcesRef = useRef(null);
  const contactRef = useRef(null);

  function scrollTo(pos){
    window.scrollTo({
      top: Math.max(0, pos - 66),
      behavior: "smooth"
    });
  }

  useEffect(() => {
    console.log("Hello")
    switch(navState){
      case "home":
        scrollTo(homeRef.current.offsetTop);
        break;
      case "blog":
        scrollTo(blogRef.current.offsetTop);
        break;
      case "games":
        scrollTo(gamesRef.current.offsetTop);
        break;
      case "apps":
        scrollTo(appsRef.current.offsetTop);
        break;
      case "resources":
        scrollTo(resourcesRef.current.offsetTop);
        break;
      case "contact":
        scrollTo(contactRef.current.offsetTop);
        break;
    }
  }, [navState]);
  
  useEffect(() => {
    const handleScroll = () => {
      if(homeRef !== null && homeRef.current !== null) {

        let distances = [];

        let elements = ["home", "blog", "apps", "games", "resources", "contact"];

        let scrollTop =  window.document.documentElement.scrollTop;
        let elementOffset = 0;
        let distance = 0;

        elementOffset = homeRef.current.offsetTop;
        distances.push(elementOffset - scrollTop);

        elementOffset = blogRef.current.offsetTop;
        distances.push(elementOffset - scrollTop);

        elementOffset = appsRef.current.offsetTop;
        distances.push(elementOffset - scrollTop);

        elementOffset = gamesRef.current.offsetTop;
        distances.push(elementOffset - scrollTop);

        elementOffset = resourcesRef.current.offsetTop;
        distances.push(elementOffset - scrollTop);

        elementOffset = contactRef.current.offsetTop;
        distances.push(elementOffset - scrollTop);

        // filter all negatives numbers in distances away and find the smallest positive number
        let minDistance = Math.min(...distances.filter((distance) => distance + 150 >= 0));
        console.log(distances.indexOf(minDistance));
        setScrolledTo(elements[distances.indexOf(minDistance)]);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div  id="home" className={styles.container}>
      <div ref={homeRef} className={styles.gridcontainer}>
        <div className="rounded-[35px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-16 h-[500px] col-span-8 flex flex-col justify-between">
          <div className="">
            <h1 className="text-4xl font-bold mb-6">Hey. My name is Oliver.</h1>
            <p className="text-3xl font-light mb-3">I'm a software developer and data scientist, with huge passion and drive. And a huge entreupeneural mindset. Please check my page for a look at some of the work I've done. </p>
          </div>
          <div className="flex flex-row">
            <a href="mailto:hey@oliverjarv.is"><button className="bg-white p-5 hover:scale-105 transition ease-in-out duration-300 font-semibold text-[#444] rounded-full">Contact me</button></a>
            <div className="mx-4">
              <a href="https://www.linkedin.com/in/oliver-simon-jarvis-742bab1a9/"><button className="bg-white p-5 hover:scale-110 transition ease-in-out duration-300 rounded-full mx-1 sition"><FaLinkedin size={25}/></button></a>
              <a href="https://github.com/oliverjarvis"><button className="bg-white p-5 rounded-full mx-1 sition hover:scale-110 transition ease-in-out duration-300"><FaGithub size={25}/></button></a>
              <a href="https://www.youtube.com/channel/UCVOmSWZ3XNG8q1VlZ8UQ_Kw"><button className="bg-white p-5 hover:scale-110 transition ease-in-out duration-300 rounded-full mx-1 sition"><FaYoutube size={25}/></button></a>
            </div>
          </div>
        </div>
        <div className="col-span-4 relative">
          <Image src="/moon.png" alt="Oliver" fill  className="rounded-[35px] object-cover"/>
        </div>
      </div>
      <div id="blog" ref={blogRef} className={styles.header}>
        <h1>Latest blog posts</h1>
      </div>

      <div className={styles.gridcontainer}>
        <div className="bg-red-100 col-span-3 aspect-square rounded-3xl cursor-pointer"></div>
        <div className="bg-red-100 col-span-3 aspect-square rounded-3xl cursor-pointer"></div>
        <div className="bg-red-100 col-span-3 aspect-square rounded-3xl cursor-pointer"></div>
        <div className="bg-gradient-to-b from-gray-900 to-gray-600 pointer-cursor text-white col-span-3 aspect-square rounded-3xl flex font-black text-xl justify-center items-center">
          <button>Read more</button>
        </div>
      </div>
      {/* apps */}
      <div  id="apps" ref={appsRef} className={styles.header}>
        <h1>Apps</h1>
      </div>
      <div className={styles.gridcontainer}>
        <div className={styles.comingsoon}>
        <div className="text-3xl font-black text-white">⏳ Coming soon</div>
        </div>
      </div>
      {/* games */}
      <div  id="games" ref={gamesRef} className={styles.header}>
        <h1>Games</h1>
      </div>
      <div className={styles.gridcontainer}>
        <div className={styles.comingsoon}>
        <div className="text-3xl font-black text-white">⏳ Coming soon</div>
        </div>
      </div>
      {/* resources */}
      <div  id="resources" ref={resourcesRef} className={styles.header}>
        <h1>Resources and projects</h1>
      </div>
      
      <div className={styles.gridcontainer}>
        <div className={styles.comingsoon}>
          <div className="text-3xl font-black text-white">⏳ Coming soon</div>
        </div>
      </div>
      {/* contact */}
      <div id="contact" ref={contactRef} className={styles.gridcontainer}>
        <div className={styles.contact_bg}>
          <h1 className={styles.textgradient}>Want to reach me?</h1>
          <p className="text-3xl font-light mb-3 my-8">Drop me a line at any of the outlets listed below.</p>
        <div className="flex flex-row w-full my-8">
            <a href="mailto:hey@oliverjarv.is"><button className="bg-blue-200 p-5 hover:scale-105 transition ease-in-out duration-300 font-semibold text-[#444] rounded-full">Contact me</button></a>
            <div className="mx-4">
              <a href="https://www.linkedin.com/in/oliver-simon-jarvis-742bab1a9/"><button className="bg-blue-200 p-5 hover:scale-110 transition ease-in-out duration-300 rounded-full mx-1 sition"><FaLinkedin size={25}/></button></a>
              <a href="https://github.com/oliverjarvis"><button className="bg-blue-200 p-5 rounded-full mx-1 sition hover:scale-110 transition ease-in-out duration-300"><FaGithub size={25}/></button></a>
              <a href="https://www.youtube.com/channel/UCVOmSWZ3XNG8q1VlZ8UQ_Kw"><button className="bg-blue-200 p-5 hover:scale-110 transition ease-in-out duration-300 rounded-full mx-1 sition"><FaYoutube size={25}/></button></a>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}
