import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Button from '../../Utils/Button/Button'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
  const [show,setshow]=useState(false);
 
  const handleClick = function () {
    console.log("button clicked");
    setshow((prev) => !prev);
  };

  return (
   <div className={styles.design}>
    <div>
        <Link to={'/'}><h3 className='headingTertiary'>Ayesha<span className={styles.special}>Estate</span></h3></Link>
    </div>
    <div className={styles.form}>
        <input type='text' placeholder='Enter' />
        <Button message={"Search"} />
    </div>
    <nav className={`${styles.navbar} ${show && styles.show}`}>
      <ul className={styles.align}>
       <li> <Link to={"/login"}>LogIn</Link></li>
      <li>Nav2</li>
        <li>Nav3</li>
      <li>Nav4</li>
    <li>Nav5</li>
      
      </ul>
    </nav>
    
   
    <div className='' onClick={handleClick}>
    <IoMdMenu className={styles.menu}   />

    </div>
    {show&&< IoIosCloseCircleOutline className={styles.cross} onClick={handleClick} />}
  
   </div>
  )
}
