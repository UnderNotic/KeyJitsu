import React from "react";

import styles from "./main.module.scss";
import Router from "./Router";
import katanaImg from "common/assets/katana.png";

export default function() {
  return (
    <div className={`container ${styles["main-container"]}`}>
      <div className="text-center">
        <img className={styles.katana} src={katanaImg} alt="katana" />
      </div>
      <Router />
    </div>
  );
}
