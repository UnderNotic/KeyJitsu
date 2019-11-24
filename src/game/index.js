import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { historyLength } from "./consts";
import decodeCategories from "categories/decodeCategories";
import ShortcutPicker from "./ShortcutPicker/RandomShortcutPicker";
import HotkeyRegistry from "./HotkeyRegistry/HotkeyRegistry";
import ProgressBar from "./progressBar";
import ExcludedListModal from "./excludedModal";

import History from "./history";

let shortcutPicker;
let hotkeyRegistry;

export default function({ shortcuts }) {
  const { encodedCategories } = useParams();
  const decodedCategoriesIndeces = decodeCategories(
    parseInt(encodedCategories)
  );
  const [shortcut, setShortcut] = useState(null);
  const [history, setHistory] = useState([]);
  const [excludedList, setExcludedList] = useState([]); //use local storage
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
    setShortcut(shortcutPicker.pickShortcut(excludedList));
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
          <History
            historyItems={history}
            exclude={toExclude =>
              setExcludedList([...new Set([...excludedList, toExclude])])
            }
          />
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
          {excludedList.length === 0 ? null : (
            <ExcludedListModal
              excludedList={excludedList}
              removeFromExclude={toBeRemoved =>
                setExcludedList(excludedList.filter(e => e !== toBeRemoved))
              }
            />
          )}
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
