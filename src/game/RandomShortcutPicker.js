export default class RandomShortcutPicker {
  constructor(categoriesIndices, hotkeysJson) {
    this.hotkeys = categoriesIndices.reduce((array, value) => {
      var categoryName = Object.keys(hotkeysJson)[value];
      var hotkeysArr = hotkeysJson[categoryName];

      return [...array, ...hotkeysArr];
    }, []);
  }

  pickShortcut() {
    return this.hotkeys[Math.floor(Math.random() * this.hotkeys.length)];
  }
}
