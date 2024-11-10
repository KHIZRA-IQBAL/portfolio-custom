import Navbar from '@/components/navbar/navbar'
import React from 'react'
import styles from "@/components/contact/contact.module.css"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link';

const Contact = () => {
  return (
    <div style={{background:"#242020",height:"100vh",  width:"100%"}}>
      <Navbar/>
      <div>
      <div className={styles.aboutmain}>
      <div className={styles.leftdiv}>
       <Image src={"/about.png"}alt='aboutmypic' width={600} height={700} className={styles.img}></Image>
      </div>
      <div className={styles.rightdiv}>
        <h1>Lets Talk</h1>
        <p>Whether you have a question, a project idea, or just want to say hello, feel free to reach out through any of the following channels</p>
        <div>
            <Link href={"https://mail.google.com/mail/u/1/"}><h2>Email:</h2> <span style={{fontSize:"25px"}}><MdEmail/></span></Link>
            <Link href={"https://www.linkedin.com/in/khizra-iqbal-870a072b4/"}><h2>Linkedin:</h2><span style={{fontSize:"25px"}}><FaLinkedin/></span></Link>
            <Link href={"https://github.com/"}><h2>Github:</h2><span style={{fontSize:"25px"}}><FaGithubSquare/></span></Link>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Contact
