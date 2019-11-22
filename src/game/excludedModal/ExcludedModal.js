import React, { useState } from "react";
import styles from "./modal.module.scss";

export default function({ body }) {
  const [show, setShow] = useState(false);

  return (
    <main>
      <Modal show={show}>
        <div class="card">
          <div class="card-body">{body}</div>

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
        Show excluded list
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
