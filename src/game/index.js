import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import store from "store2";

import { maxHistoryLength } from "./consts";
import decodeCategories from "categories/decodeCategories";
import ShortcutPicker from "./ShortcutPicker";
import HotkeyRegistry from "./HotkeyRegistry";
import ProgressBar from "./progressBar";
import ExcludedListModal from "./excludedModal";

import History from "./history";

let shortcutPicker;
let hotkeyRegistry;

export default function({ shortcuts, excludedListStoreKey }) {
  const { encodedCategories } = useParams();
  const decodedCategoriesIndeces = decodeCategories(
    parseInt(encodedCategories)
  );

  const [shortcut, setShortcut] = useState(null);
  const [history, setHistory] = useState([]);
  const [excludedList, setExcludedList] = useState(
    store(excludedListStoreKey) || []
  );
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

    if (history.length === maxHistoryLength) {
      history.pop();
    }

    setHistory([{ shortcut, isHit }, ...history]);
    pickNewShortcut();
  }

  if (shortcut) {
    hotkeyRegistry.listenFor(shortcut.value, isHit => {
      handleShortcutHit(isHit);
    });
  }

  function pickNewShortcut() {
    setShortcut(shortcutPicker.pickShortcut(excludedList));
  }

  function resetGame() {
    setHistory([]);
    setSuccessCount(0);
    setFailCount(0);
    pickNewShortcut();
  }

  function setExcludedListWithStorage(excludedList) {
    setExcludedList(excludedList);
    store(excludedListStoreKey, excludedList);
  }

  const excludedFromChosenCategories = getExcludedFromChosenCategories();
  function getExcludedFromChosenCategories() {
    return excludedList.filter(s => {
      var x = decodedCategoriesIndeces.map(i => {
        return Object.keys(shortcuts)[i];
      });
      return x.includes(s.categoryName);
    });
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
              excludedList.every(s => s.value !== toExclude.value) &&
              setExcludedListWithStorage([...excludedList, toExclude])
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
          {excludedFromChosenCategories.length === 0 ? null : (
            <ExcludedListModal
              excludedList={excludedFromChosenCategories}
              removeFromExclude={toBeRemoved =>
                setExcludedListWithStorage(
                  excludedList.filter(s => s.value !== toBeRemoved.value)
                )
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
