import React from 'react'
import styles from "./Message.module.css"
export default function Message({message,type}) {
  return (
    <div className={`${styles.messageContainer}  ${styles[type]}`}>
      <p>{message}</p>
    </div>
  )
}
