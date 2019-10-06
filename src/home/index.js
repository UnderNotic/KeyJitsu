import React from "react";

import styles from "./home.module.css";
import intellijImg from "./assets/intellij.svg";
import vsCodeImg from "./assets/visual-studio-code.svg";
import vsImg from "./assets/visual-studio.svg";

export default function() {
  return (
    <div className="container-fluid">
      <div className="row vertical-center">
        <div className="col-xs-4 col-md-4">
          <div className={`${styles["main-logo"]}`}>
            <img src={vsCodeImg} alt="..." />
            <div className="caption">
              <center>
                <h3>Discover ancient secrets of VS Code</h3>
              </center>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-md-4">
          <div className="thumbnail text-center main-logo">
            <img src={vsImg} alt="..." />
            <div className="caption">
              <center>
                <h3>Become Visual Studio Bonjwa</h3>
              </center>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-md-4">
          <div className="thumbnail main-logo">
            <img src={intellijImg} alt="..." />

            <div className="caption">
              <center>
                <h3> Aquire power of Intellijitsu</h3>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
