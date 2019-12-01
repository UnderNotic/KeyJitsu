import hotkeys from "hotkeys-js";

export default class HotkeyHandler {
  constructor(hotkeyRegistry) {
    this.hotkeyRegistry = hotkeyRegistry;

    hotkeys("*", { keyup: true, keydown: false }, event => {
      event.preventDefault();

      this.hotkeyRegistry.resetLastPressedKeyCodes();

      return false;
    });

    hotkeys("*", { keyup: false, keydown: true }, event => {
      event.preventDefault();

      const pressed = hotkeys.getPressedKeyCodes();
      this.hotkeyRegistry.onKeyPressed(pressed);

      return false;
    });
  }

  dispose() {
    hotkeys.deleteScope("all");
  }
}
