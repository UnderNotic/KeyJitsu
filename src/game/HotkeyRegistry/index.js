import hotkeys from "hotkeys-js";
import keycode from "keycode";

let lastPressedKeyCodes;

export default class HotkeyRegistry {
  constructor() {
    hotkeys("*", { keyup: true, keydown: false }, () => {
      lastPressedKeyCodes = null;
    });

    hotkeys("*", { keyup: false, keydown: true }, event => {
      event.preventDefault();

      if (!this.shortcutsToListen || !this.cb) {
        return false;
      }

      let pressed = hotkeys.getPressedKeyCodes();
      if (
        lastPressedKeyCodes &&
        lastPressedKeyCodes.length === pressed.length &&
        lastPressedKeyCodes.every(p => pressed.includes(p))
      ) {
        return false;
      }
      lastPressedKeyCodes = pressed;

      let found;
      const isShortcutHitCompletely = this.shortcutsToListen.some(s => {
        const shortcut = s[0];
        if (shortcut.length !== pressed.length) {
          return false;
        }
        const hit = shortcut.every(k => {
          return pressed.includes(keycode(k));
        });

        hit && (found = s);

        return hit;
      });

      const isShortcutHit = this.shortcutsToListen.some(s => {
        const shortcut = s[0];
        return pressed.every(p => shortcut.includes(keycode(p)));
      });

      if (!isShortcutHit) {
        this.cb(false);
      } else if (isShortcutHitCompletely) {
        if (found.length === 1) {
          this.cb(true);
        }
        found.shift();
      }

      return false;
    });
  }

  getPartOfShortcut(shortcut) {
    return shortcut.split(" ")[0];
  }

  shortcutPartHit() {
    const s = this.shortcutsToListen.split(" ");
    s.shift();
    this.shortcutsToListen = s.join(" ");
  }

  listenFor(shortcut, cb) {
    this.shortcutsToListen = shortcut.map(s =>
      s.split(" ").map(p => p.split("+"))
    );
    this.cb = cb;
  }

  dispose() {
    hotkeys.deleteScope("all");
  }
}
