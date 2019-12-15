import React from "react";
import { Link } from "react-router-dom";

import styles from "./home.module.scss";
import riderImg from "common/assets/logo/rider.png";
import vsCodeImg from "common/assets/logo/visual-studio-code.svg";
import vsImg from "common/assets/logo/visual-studio.svg";

export default function() {
  return (
    <div className="row align-items-center">
      <div className="col-4 text-center">
        <Link to="vscode/Default">
          <figure className={`${styles["main-logo"]} figure`}>
            <img src={vsCodeImg} alt="..." className="img-fluid figure-img" />
            <figcaption className="figure-caption">
              <h4>Discover ancient secrets of VS Code</h4>
            </figcaption>
          </figure>
        </Link>
      </div>
      <div className="col-4 text-center">
        <Link to="vs/Default">
          <figure className={`${styles["main-logo"]} figure`}>
            <img src={vsImg} alt="..." className="img-fluid figure-img" />
            <figcaption className="figure-caption">
              <h4>Become Visual Studio Bonjwa</h4>
            </figcaption>
          </figure>
        </Link>
      </div>
      <div className="col-4 text-center">
        <Link to="rider/Visual Studio">
          <figure className={`${styles["main-logo"]} figure`}>
            <img src={riderImg} alt="..." className="img-fluid figure-img" />
            <figcaption className="figure-caption">
              <h4>Understand the true meaning of Rider</h4>
            </figcaption>
          </figure>
        </Link>
      </div>
      {/* 
      <div className="col-4 text-center">
        <Link to="resharper">
          <figure className={`${styles["main-logo"]} figure`}>
            <img src={intellijImg} alt="..." className="img-fluid figure-img" />
            <figcaption className="figure-caption">
              <h4> Aquire power of Intellijitsu</h4>
            </figcaption>
          </figure>
        </Link>
      </div> */}
    </div>
  );
}
