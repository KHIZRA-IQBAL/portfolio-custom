import Navbar from '@/components/navbar/navbar'
import styles from "@/components/about/about.module.css"
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div style={{background:"#242020", height:"100vh",  width:"100%"}}>
      <Navbar/>
      <div className={styles.aboutmain}>
      <div className={styles.leftdiv}>
       <Image src={"/about.png"}alt='aboutmypic' width={600} height={700} className={styles.img}></Image>
      </div>
      <div className={styles.rightdiv}>
        <h1>About Me</h1>
        <p>Hello! I am Khizra, a passionate developer with a strong foundation in HTML, CSS, and TypeScript. My work is dedicated to creating dynamic, responsive web applications that bring ideas to life through elegant, clean code. With a keen eye for design, I love experimenting with color schemes and layouts that enhance user experiences. My current focus is on building interactive features, including dynamic blogs and e-commerce sites, in Next.js and TypeScript.</p>
      </div>
    </div>
      </div>
  )
}

export default About
