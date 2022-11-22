import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.gridcontainer}>
        <div className="rounded-[35px] bg-gradient-to-br from-rose-100 to-teal-100 p-8 h-[500px] col-span-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-semibold mb-6">Hello! My name is Oliver.</h1>
            <p className="text-3xl font-light mb-3">I have many years of experience in machine learning, web development and game development.</p>
          </div>
          <div className="flex flex-row">
            <a href="mailto:hey@oliverjarv.is"><button className="bg-white p-5 rounded-full">Contact me</button></a>
            <div className="mx-4">
              <a href="mailto:hey@oliverjarv.is"><button className="bg-white p-5 rounded-full mx-1"><FaLinkedin/></button></a>
              <a href="mailto:hey@oliverjarv.is"><button className="bg-white p-5 rounded-full mx-1"><FaGithub/></button></a>
              <a href="mailto:hey@oliverjarv.is"><button className="bg-white p-5 rounded-full mx-1"><FaYoutube/></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
