import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import decodeCategories from "categories/decodeCategories";
import ShortcutPicker from "./RandomShortcutPicker";
import HotkeyRegistry from "./HotkeyRegistry";

let shortcutPicker;
let hotkeyRegistry;

export default function({ shortcuts }) {
  const { encodedCategories } = useParams();
  const decodedCategoriesIndeces = decodeCategories(
    parseInt(encodedCategories)
  );
  const [shortcut, setShortcut] = useState(null);

  useEffect(() => {
    hotkeyRegistry = new HotkeyRegistry();

    return function cleanup() {
      hotkeyRegistry.dispose();
    };
  }, []);

  useEffect(() => {
    shortcutPicker = new ShortcutPicker(decodedCategoriesIndeces, shortcuts);
    setShortcut(shortcutPicker.pickShortcut());
  }, [decodedCategoriesIndeces, shortcuts]);

  useEffect(() => {
    if (shortcut) {
      hotkeyRegistry.listenFor(shortcut.value, isHit => {
        console.log(isHit);
      });
    }
  }, [shortcut]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <hr />
          <h2 className="text-center">{shortcut ? shortcut.name : ""}</h2>

          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "25%" }}
            ></div>

            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <hr />
          {/* <h4>History with last 5 items(this title not neceseery)</h4> */}
          <ul className="list-group">
            <li className="list-group-item">asddsd</li>
            <li className="list-group-item">asddsd</li>
            <li className="list-group-item">asddsd</li>
            <li className="list-group-item">asddsd</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <Link to="">
            <button type="button" className="btn btn-secondary float-left">
              I'm done
            </button>
          </Link>
          <button type="button" className="btn btn-danger btn-lg float-right">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
