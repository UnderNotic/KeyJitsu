import React from "react";
import { Link } from "react-router-dom";

import styles from "./home.module.scss";
import intellijImg from "./assets/intellij.svg";
import vsCodeImg from "./assets/visual-studio-code.svg";
import vsImg from "./assets/visual-studio.svg";

export default function() {
  return (
    <div className="row align-items-center">
      <div className="col-4 text-center">
        <Link to="/vscode">
          <figure className={`${styles["main-logo"]} figure`}>
            <img src={vsCodeImg} alt="..." className="img-fluid figure-img" />
            <figcaption className="figure-caption">
              <h4>Discover ancient secrets of VS Code</h4>
            </figcaption>
          </figure>
        </Link>
      </div>
      <div className="col-4 text-center">
        <Link to="vs">
          <figure className={`${styles["main-logo"]} figure`}>
            <img src={vsImg} alt="..." className="img-fluid figure-img" />
            <figcaption className="figure-caption">
              <h4>Become Visual Studio Bonjwa</h4>
            </figcaption>
          </figure>
        </Link>
      </div>
      <div className="col-4 text-center">
        <Link to="resharper">
          <figure className={`${styles["main-logo"]} figure`}>
            <img src={intellijImg} alt="..." className="img-fluid figure-img" />
            <figcaption className="figure-caption">
              <h4> Aquire power of Intellijitsu</h4>
            </figcaption>
          </figure>
        </Link>
      </div>
    </div>
  );
}
