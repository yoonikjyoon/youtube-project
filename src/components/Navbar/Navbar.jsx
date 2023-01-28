import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>logo</div>
      <div className={styles.search}>
        search
        <input type="text" />
      </div>
    </div>
  );
}
