import React from 'react'
import Navbar from '@/components/navbar/navbar'
import styles from "@/components/experience/experience.module.css"
import Image from 'next/image'

const  Experience = () => {
  return (
    <div style={{background:"#242020", height:"100vh", width:"100%"}}>
      <Navbar/>
      <div>
      <div className={styles.aboutmain}>
      <div className={styles.leftdiv}>
       <Image src={"/about.png"}alt='aboutmypic' width={600} height={700} className={styles.img}></Image>
      </div>
      <div className={styles.rightdiv}>
        <h1>My Experience</h1>
        <p>Throughout my development journey, I have worked on diverse projects ranging from dynamic resumes and blogs to full-fledged e-commerce applications. With a foundation in HTML, CSS, and TypeScript, I have built web applications that prioritize user experience and interactivity. Recently, I have focused on mastering Next.js to create scalable, high-performance applications, incorporating advanced features like server-side rendering (SSR), static site generation (SSG), and seamless API integration. My work includes everything from implementing user authentication and handling API data to troubleshooting build processes, all while ensuring a polished and user-friendly design. This hands-on experience has honed my skills and prepared me to tackle complex web development challenges.</p>
      </div>
    </div>
      </div>
    </div>
  )
}

export default  Experience
