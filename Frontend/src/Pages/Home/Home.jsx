import React from 'react'
import styles from './Home.module.css';
import Button from '../../Utils/Button/Button';
export default function Home() {
  return (
    <div className={styles.design}>
     <div className={styles.text}>
      <h1 className='HeadingPrimary'>Find Your Next <span className={styles.special}>Home</span> Here</h1> 
    <p className={styles.para}>The one stop to get your next dream home</p>
     <Button  message={"Get Started"} />
     </div>
    </div>
  )
}
