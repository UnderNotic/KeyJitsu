import React from "react";
import "react-router-dom";

import Home from "home";
import katanaImg from "./assets/katana.svg";
import flipKatanaImg from "./assets/katana-flip.svg";
import styles from "./main.module.css";

export default function() {
  return (
    <div className={styles["vertical-center"]}>
      <div className={styles["inner-container"]}>
        <center>
          <img className={styles.katana} src={katanaImg} alt="katana" />
        </center>
        <div className="container">
          <Home />
        </div>
        <center>
          <img className={styles.katana} src={flipKatanaImg} alt="katana" />
        </center>
      </div>
    </div>
  );
}