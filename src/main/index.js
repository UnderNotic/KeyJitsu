import React from "react";

import katanaImg from "./assets/katana.svg";
import flipKatanaImg from "./assets/katana-flip.svg";
import styles from "./main.module.css";
import Router from "./Router";

export default function() {
  return (
    <div className={styles["vertical-center"]}>
      <div className="container">
        <center>
          <img className={styles.katana} src={katanaImg} alt="katana" />
        </center>
        <div className="container">
          <Router />
        </div>
        <center>
          <img className={styles.katana} src={flipKatanaImg} alt="katana" />
        </center>
      </div>
    </div>
  );
}
