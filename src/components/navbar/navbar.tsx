import React from 'react'
import styles from "@/components/navbar/navbar.module.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navline}></div>
      <ul >
       <Link href={"/"}> <li>HOME</li></Link>
       <Link href={"/about"}> <li>ABOUT ME</li></Link>
        <Link href={"/project"}><li>PROJECTS</li></Link>
        <Link href={"/workexperience"}><li>WORK EXPERIENCE</li></Link>
       <Link href={"/contact"}> <li>CONTACT</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
