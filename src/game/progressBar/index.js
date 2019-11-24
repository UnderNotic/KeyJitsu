import React from "react";
import styles from "./progressBar.module.scss";

export default ({ successCount, failCount }) => {
  const successRatio =
    failCount === 0 ? 1 : successCount / (successCount + failCount);
  const success = Math.round(successRatio * 100);
  const fail = 100 - success;

  return (
    <div className={`progress ${styles["progress"]}`}>
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{ width: success + "%" }}
      ></div>

      <div
        className="progress-bar bg-danger"
        role="progressbar"
        style={{ width: fail + "%" }}
      ></div>
    </div>
  );
};
