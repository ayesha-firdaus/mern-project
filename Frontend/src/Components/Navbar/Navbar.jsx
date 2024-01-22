import React from 'react'
import styles from './Navbar.module.css'
import Button from '../../Utils/Button/Button'
export default function Navbar() {
  return (
   <div className={styles.design}>
    <div>
        <h3 className='headingTertiary'>Ayesha<span className={styles.special}>Estate</span></h3>
    </div>
    <div className={styles.form}>
        <input type='text' placeholder='Enter' />
        <Button message={"Search"} />
    </div>
    <nav className={styles.navbar}>
      <ul>
        <li>Sign In</li>
      
      </ul>
    </nav>
   </div>
  )
}
