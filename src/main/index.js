import React from "react";
import ReactTooltip from "react-tooltip";

import styles from "./main.module.scss";
import Router from "./Router";
import katanaImg from "common/assets/katana.png";

export default function() {
  return (
    <div className={`container ${styles["main-container"]}`}>
      <div className="text-center">
        <img className={styles.katana} src={katanaImg} alt="katana" />
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-9 col-lg-10">
          <ReactTooltip place="right" />
          <Router />
        </div>
      </div>
    </div>
  );
}
