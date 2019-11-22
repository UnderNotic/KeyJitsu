import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { historyLength } from "./consts";
import decodeCategories from "categories/decodeCategories";
import ShortcutPicker from "./RandomShortcutPicker";
import HotkeyRegistry from "./HotkeyRegistry";
import ProgressBar from "./ProgressBar";
import { fail } from "assert";

let shortcutPicker;
let hotkeyRegistry;

export default function({ shortcuts }) {
  const { encodedCategories } = useParams();
  const decodedCategoriesIndeces = decodeCategories(
    parseInt(encodedCategories)
  );
  const [shortcut, setShortcut] = useState(null);
  const [history, setHistory] = useState([]);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);

  useEffect(() => {
    hotkeyRegistry = new HotkeyRegistry();

    return function cleanup() {
      hotkeyRegistry.dispose();
    };
  }, []);

  useEffect(() => {
    shortcutPicker = new ShortcutPicker(decodedCategoriesIndeces, shortcuts);
    pickNewShortcut();
  }, []);

  function handleShortcutHit(isHit) {
    if (isHit) {
      setSuccessCount(successCount + 1);
    } else {
      setFailCount(failCount + 1);
    }

    if (history.length === historyLength) {
      history.pop();
    }
    setHistory([{ shortcut, isHit }, ...history]);
    pickNewShortcut();
  }

  useEffect(() => {
    if (shortcut) {
      hotkeyRegistry.listenFor(shortcut.value, isHit => {
        handleShortcutHit(isHit);
      });
    }
  }, [shortcut]);

  function pickNewShortcut() {
    setShortcut(shortcutPicker.pickShortcut());
  }

  function resetGame() {
    setHistory([]);
    setSuccessCount(0);
    setFailCount(0);

    pickNewShortcut();
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <hr />
          <kbd>
            <h2 className="text-center">{shortcut ? shortcut.name : ""}</h2>
          </kbd>
          <ProgressBar successCount={successCount} failCount={failCount} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <hr />
          <ul className="list-group">
            {history.map((h, i) => (
              <li
                key={i}
                className={`list-group-item ${
                  h.isHit
                    ? "list-group-item-success"
                    : " list-group-item-danger"
                }`}
              >
                {h.shortcut.name}
                <span className="float-right">{h.shortcut.value}</span>
              </li>
            ))}
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
          <button
            onClick={resetGame}
            type="button"
            className="btn btn-danger btn-lg float-right"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
