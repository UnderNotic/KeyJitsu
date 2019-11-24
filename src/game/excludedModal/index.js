import React, { useState } from "react";
import styles from "./excludedModal.module.scss";
import ReactTooltip from "react-tooltip";

export default function({ excludedList, removeFromExclude }) {
  const [show, setShow] = useState(false);
  return (
    <span>
      <Modal show={show}>
        <div className="card">
          <div className="card-header">Exclusion</div>
          <div className={`card-body overflow-auto ${styles["card-body"]}`}>
            <ReactTooltip place="right" />
            <ul className="list-group" data-tip="Remove">
              {excludedList.map((s, i) => (
                <li
                  key={i}
                  onClick={() => removeFromExclude(s)}
                  className={`list-group-item list-group-item-action ${
                    styles["card-item"]
                  }`}
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setShow(false)}
            type="button"
            className="btn btn-secondary float-left"
          >
            Close
          </button>
        </div>
      </Modal>
      <button
        type="button"
        className="btn btn-link"
        onClick={() => setShow(true)}
      >
        Show excluded list ({excludedList.length})
      </button>
    </span>
  );
}

const Modal = ({ show, children }) => {
  const showHideClassName = show
    ? `${styles["modal"]} ${styles["display-block"]}`
    : `${styles["modal"]} ${styles["display-none"]}`;

  return (
    <div className={showHideClassName}>
      <section className={styles["modal-main"]}>{children}</section>
    </div>
  );
};
