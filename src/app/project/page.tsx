import React from 'react'
import styles from "@/components/project/project.module.css"
import Navbar from '@/components/navbar/navbar'
import Image from "next/image"

const Projects = () => {
  return (
    <div style={{background:"#242020", height:"100vh", width:"100%"}} className={styles.main}>
      <Navbar/>
      <h1 className={styles.h1}>My  Projects</h1>
      <div className={styles.grid}>
         <div className={styles.card}>
          <Image src={"/myimages/project1.png"} alt='projectpic' width={350} height={350}className={styles.img}></Image>
          <p>TypeScript-powered to-do list: organize, track, complete tasks.</p>
         </div>
         <div className={styles.card}>
          <Image src={"/myimages/project2.png"} alt='projectpic' width={350} height={350}className={styles.img}></Image>
          <p>TypeScript-powered to-do list: organize, track, complete tasks.</p>
         </div>
         <div className={styles.card}>
          <Image src={"/myimages/project3.png"} alt='projectpic' width={350} height={350}className={styles.img}></Image>
          <p>TypeScript-powered to-do list: organize, track, complete tasks.</p>
         </div>
      </div>
    </div>
  )
}

export default Projects
