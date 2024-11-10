import React from 'react'
import styles from "@/components/herosection/hero.module.css"
const Hero = () => {
  return (
  <>
    <div className={styles.hero}>
      <h1>PORTFOLIO</h1>
    </div>
     <div className={styles.herolineparent}>
     <div className={styles.heroline}></div>
     </div>
  </>
  )
}

export default Hero
