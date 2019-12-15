import React from "react";
import styles from "./header.module.scss";

export default function({ header, text, logo }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className={styles["title-section"]}>
          <h1>
            <img className={styles["small-logo"]} src={logo} alt="..." />
            {header}
          </h1>

          <span className="text-muted">{text}</span>
        </div>
      </div>
    </div>
  );
}
