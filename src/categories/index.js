import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import styles from "./panels.module.scss";
import encodeCategories from "./encodeCategories";
import Dropdown from "./Dropdown";

export default function({ categoriesList, keymaps }) {
  const [chosenCategories, setChosenCategories] = useState([]);
  const decodedCategories = encodeCategories(chosenCategories);
  const list = categoriesList.map((c, i) => (
    <li
      key={i}
      onClick={() => {
        const found = chosenCategories.findIndex(ch => ch.value === c);
        if (found !== -1) {
          chosenCategories.splice(found, 1);
          setChosenCategories([...chosenCategories]);
        } else {
          setChosenCategories([...chosenCategories, { value: c, i }]);
        }
      }}
      className={`list-group-item ${styles["panel-item"]} ${
        chosenCategories.find(ch => ch.value === c)
          ? styles["panel-item-active"]
          : ""
      }`}
    >
      {c}
    </li>
  ));

  const { keymap } = useParams();
  var ide = useLocation().pathname.substring(
    1,
    useLocation().pathname.lastIndexOf("/")
  );

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h4>
            Choose category
            <button
              type="button"
              className="btn btn-info float-right"
              onClick={() => {
                if (categoriesList.length === chosenCategories.length) {
                  setChosenCategories([]);
                } else {
                  setChosenCategories(
                    categoriesList.map((c, i) => ({ value: c, i }))
                  );
                }
              }}
            >
              {categoriesList.length === chosenCategories.length
                ? "Deselect all"
                : "Select all"}
            </button>
            <Dropdown keymaps={keymaps} keymap={keymap} ide={ide} />
          </h4>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-5" style={{ padding: "0px" }}>
          <ul className="list-group list-group-flush">
            {list.slice(0, list.length / 2)}
          </ul>
        </div>
        <div className="col-5" style={{ padding: "0px" }}>
          <ul className="list-group list-group-flush">
            {list.slice(list.length / 2)}
          </ul>
        </div>
        <div className="col-12">
          <hr />
          <Link to="">
            <button type="button" className="btn btn-secondary float-left">
              Ran away
            </button>
          </Link>
          {decodedCategories === 0 ? null : (
            <Link to={`/${ide}/${keymap}/game/${decodedCategories}`}>
              <button
                type="button"
                className="btn btn-success btn-lg float-right"
              >
                Fight
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
