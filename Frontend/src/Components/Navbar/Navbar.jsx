import React from 'react'
import styles from './Navbar.module.css'
import Button from '../../Utils/Button/Button'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
   <div className={styles.design}>
    <div>
        <Link to={'/'}><h3 className='headingTertiary'>Ayesha<span className={styles.special}>Estate</span></h3></Link>
    </div>
    <div className={styles.form}>
        <input type='text' placeholder='Enter' />
        <Button message={"Search"} />
    </div>
    <nav className={styles.navbar}>
      <ul>
        <Link to={"/login"}><li>LogIn</li></Link>
      
      </ul>
    </nav>
   </div>
  )
}
