import React from "react";

import styles from "./home.module.css";
import intellijImg from "./assets/intellij.svg";
import vsCodeImg from "./assets/visual-studio-code.svg";
import vsImg from "./assets/visual-studio.svg";

export default function() {
  return (
    <div className={`row align-items-center ${styles["vertical-center"]}`}>
      <div className="col-4 text-center">
        <figure className={`${styles["main-logo"]} figure`}>
          <img src={vsCodeImg} alt="..." className="img-fluid figure-img" />
          <figcaption class="figure-caption">
            <center>
              <h3>Discover ancient secrets of VS Code</h3>
            </center>
          </figcaption>
        </figure>
      </div>
      <div className="col-4 text-center">
        <figure className={`${styles["main-logo"]} figure`}>
          <img src={vsImg} alt="..." className="img-fluid figure-img" />
          <figcaption class="figure-caption">
            <center>
              <h3>Become Visual Studio Bonjwa</h3>
            </center>
          </figcaption>
        </figure>
      </div>
      <div className="col-4 text-center">
        <figure className={`${styles["main-logo"]} figure`}>
          <img src={intellijImg} alt="..." className="img-fluid figure-img" />

          <figcaption class="figure-caption">
            <center>
              <h3> Aquire power of Intellijitsu</h3>
            </center>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
