import React from 'react';
import styles from "./Button.module.css";

export default function Button({ message = "", loading = false, loadingmessage = "" }) {
  return (
    <button className={styles.btn} disabled={loading}>
      {loading ? loadingmessage : message}
    </button>
  );
}