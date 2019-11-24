import { historyLength } from "../consts";

export default class RandomShortcutPicker {
  constructor(categoriesIndices, hotkeysJson) {
    this.hotkeys = categoriesIndices.reduce((array, value) => {
      var categoryName = Object.keys(hotkeysJson)[value];
      var hotkeysArr = hotkeysJson[categoryName].map(h => ({
        ...h,
        categoryName
      }));

      return [...array, ...hotkeysArr];
    }, []);

    this.history = [];
  }

  pickShortcut(excludedList) {
    var index = this.generateRandomShortcutIndex();
    while (
      this.hotkeys.length > excludedList.length + historyLength
        ? (this.hotkeys.length > historyLength &&
            this.history.includes(index)) ||
          excludedList.includes(this.hotkeys[index].name)
        : this.hotkeys.length > historyLength && this.history.includes(index)
    ) {
      index = this.generateRandomShortcutIndex();
    }

    this.pushToHistory(index);

    return this.hotkeys[index];
  }

  pushToHistory(index) {
    if (this.history.length === historyLength) {
      this.history.shift();
    }
    this.history.push(index);
  }

  generateRandomShortcutIndex() {
    return Math.floor(Math.random() * this.hotkeys.length);
  }
}
