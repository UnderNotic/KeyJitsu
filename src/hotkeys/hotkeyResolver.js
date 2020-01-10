export default function resolve(editor, keymapType) {
  var hotkeys = require(`./${editor}/keymap.${keymapType
    .toLowerCase()
    .replace(" ", "")}.json`);

  for (const cat in hotkeys) {
    hotkeys[cat] = hotkeys[cat].filter(h => isHotkeyBrowserCompliant(h.value));
  }

  return hotkeys;
}

function isHotkeyBrowserCompliant(shortcuts) {
  return shortcuts.every(s => {
    const splitted = s.split("+").flatMap(x => x.split(" "));
    return !(splitted.includes("w") && splitted.includes("ctrl"));
  });
}
