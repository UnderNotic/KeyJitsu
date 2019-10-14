import React from "react";
import "react-router-dom";

import Home from "home";
import katanaImg from "./assets/katana.svg";
import flipKatanaImg from "./assets/katana-flip.svg";
import styles from "./main.module.css";

export default function() {
  return (
    <div className="container-fluid">
      <center>
        <img className={styles.katana} src={katanaImg} alt="katana" />
      </center>
      <div className="container-fluid inner-container">
        <Home />
      </div>
      <center>
        <img className={styles.katana} src={flipKatanaImg} alt="katana" />
      </center>
    </div>
  );
}
