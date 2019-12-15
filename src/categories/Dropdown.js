import React from "react";
import { Link } from "react-router-dom";

export default function({ keymaps, keymap, ide }) {
  return (
    <span className="dropdown float-right">
      <button
        className="btn btn-secondary dropdown-toggle"
        style={{ marginRight: 10 }}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Keymap {keymap ? decodeURI(keymap) : keymaps[0]}
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        {keymaps.map((k, i) => (
          <Link key={i} className="dropdown-item" to={`/${ide}/${k}`}>
            {k}
          </Link>
        ))}
      </div>
    </span>
  );
}
