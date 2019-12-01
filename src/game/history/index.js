import React from "react";
import ReactTooltip from "react-tooltip";

import styles from "./history.module.scss";

export default function({ historyItems, exclude }) {
  return (
    <ul className="list-group" data-tip="Exclude">
      <ReactTooltip place="right" />
      {historyItems.map((h, i) => (
        <li
          onClick={() => exclude(h.shortcut)}
          key={i}
          className={`list-group-item ${styles["history-item"]} ${
            h.isHit ? "list-group-item-success" : " list-group-item-danger"
          }`}
        >
          {h.shortcut.name}
          <span className="float-right">
            <kbd>{h.shortcut.value.join(" ")}</kbd>
          </span>
        </li>
      ))}
    </ul>
  );
}
