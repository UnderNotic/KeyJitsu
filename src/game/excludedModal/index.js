import React, { useState } from "react";
import styles from "./excludedModal.module.scss";
import ReactTooltip from "react-tooltip";

export default function({ excludedList, removeFromExclude }) {
  const [show, setShow] = useState(false);

  return (
    <main>
      <Modal show={show}>
        <div className="card">
          <div class="card-header">Exclusion</div>
          <div className={`card-body overflow-auto ${styles["card-body"]}`}>
            <ReactTooltip place="right" />
            <ul className="list-group" data-tip="Remove">
              {excludedList.map(n => (
                <li
                  onClick={() => removeFromExclude(n)}
                  className={`list-group-item list-group-item-action ${
                    styles["card-item"]
                  }`}
                >
                  {n}
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
    </main>
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
