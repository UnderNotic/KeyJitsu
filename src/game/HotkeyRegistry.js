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

      let pressed = hotkeys.getPressedKeyCodes();
      if (
        lastPressedKeyCodes &&
        lastPressedKeyCodes.length === pressed.length &&
        lastPressedKeyCodes.every(p => pressed.includes(p))
      ) {
        return false;
      }
      lastPressedKeyCodes = pressed;

      const isShortcutHitCompletely = this.shortcutsToListen.some(s => {
        if (s.length !== pressed.length) {
          return false;
        }
        return s.every(k => {
          return pressed.includes(keycode(k));
        });
      });

      const isShortcutHit = this.shortcutsToListen.some(s =>
        pressed.every(p => s.includes(keycode(p)))
      );

      if (!isShortcutHit) {
        this.cb(false);
      } else if (isShortcutHitCompletely) {
        this.cb(true);
      }

      return false;
    });
  }

  listenFor(shortcut, cb) {
    this.shortcutsToListen = shortcut.map(s => s.split("+"));
    this.cb = cb;
  }

  dispose() {
    hotkeys.deleteScope("all");
  }
}
