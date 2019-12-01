import keycode from "keycode";

let lastPressedKeyCodes;
export default class HotkeyRegistry {     
    resetLastPressedKeyCodes(){
        lastPressedKeyCodes = null;
    }

    listenFor(shortcut, cb) {
        this.shortcutsToListen = shortcut.map(s =>
            s.split(" ").map(p => p.split("+"))
        );
        this.cb = cb;
    }
    
    onKeyPressed(pressed){
        if (
            (lastPressedKeyCodes &&
            lastPressedKeyCodes.length === pressed.length &&
            lastPressedKeyCodes.every(p => pressed.includes(p))) || (!this.shortcutsToListen || !this.cb) 
        ) {
            return;
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
    }
}
