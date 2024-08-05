import React from "react";
import styles from "./loading .module.css";

export default function loading() {
  return (
    <div>
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
