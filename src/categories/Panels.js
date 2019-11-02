import React from "react";
import styles from "./panels.module.scss";

export default function({ categoriesList }) {
  const list = categoriesList.map(c => (
    <li className={`list-group-item ${styles["panel-item"]}`}>{c}</li>
  ));

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-10">
          <h4>
            Choose category
            <button type="button" className="btn btn-info float-right">
              Select all
            </button>
          </h4>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-4" style={{ padding: "0px" }}>
          <ul className="list-group list-group-flush">
            {list.slice(0, list.length / 2)}
          </ul>
        </div>

        <div className="col-4" style={{ padding: "0px" }}>
          <ul className="list-group list-group-flush ">
            {list.slice(list.length / 2)}
          </ul>
        </div>
      </div>
    </>
  );
}
