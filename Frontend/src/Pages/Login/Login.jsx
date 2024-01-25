import React from 'react'
import Button from '../../Utils/Button/Button'
import { useEffect } from 'react';
import styles from "./Login.module.css"
import login from "../../Images/loginnew.png"


export default function Login() {
  
  return (
    <div className={styles.design} >
    <div className={styles.overall}>
      <div className={styles.imgContainer}>
        <img  className={styles.image} src ={login}/>
      </div>
      <form className={styles.form}>
      <h1>Login</h1>
        <div className={styles.inputContainer}>
            <label>Enter Your Email</label>

            <input type='email' />
        </div>
        <div className={styles.inputContainer}>
           <label>Enter Your Password</label>
         
           <input type="password" />
        </div>
        <div className={styles.loginbtn}>
        <Button message="Login" loadingmessage="Logging In" />
        </div>
      </form>
    </div>
    </div>
  )
}
