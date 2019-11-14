import React from "react";
import styles from "./vs.module.scss";
import vsImg from "home/assets/visual-studio.svg";

export default function() {
  return (
    <div className="row">
      <div className="col-12">
        <div className={styles["title-section"]}>
          <h1>
            <img className={styles["small-logo"]} src={vsImg} alt="..." />
            Visual Studio
          </h1>

          <span className="text-muted">
            There are only two forces in the world, the sword and the spirit. In
            the long run the sword will always be conquered by the spirit.
          </span>
        </div>
      </div>
    </div>
  );
}