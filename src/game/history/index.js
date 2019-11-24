import React from "react";

import styles from "./history.module.scss";

export default function({ historyItems, exclude }) {
  return (
    <ul className="list-group" data-tip="Exclude">
      {historyItems.map((h, i) => (
        <li
          onClick={() => exclude(h.shortcut.name)}
          key={i}
          className={`list-group-item ${styles["history-item"]} ${
            h.isHit ? "list-group-item-success" : " list-group-item-danger"
          }`}
        >
          {h.shortcut.name}
          <span className="float-right">
            <kbd>{h.shortcut.value}</kbd>
          </span>
        </li>
      ))}
    </ul>
  );
}
