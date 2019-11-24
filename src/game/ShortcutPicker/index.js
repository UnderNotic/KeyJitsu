import { maxHistoryLength } from "../consts";
import { ShouldRepick } from "./RepickPolicy";

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
      ShouldRepick(
        this.hotkeys,
        this.history,
        excludedList,
        maxHistoryLength,
        index
      )
    ) {
      index = this.generateRandomShortcutIndex();
    }

    this.pushToHistory(index);

    return this.hotkeys[index];
  }

  pushToHistory(index) {
    if (this.history.length === maxHistoryLength) {
      this.history.shift();
    }
    this.history.push(index);
  }

  generateRandomShortcutIndex() {
    return Math.floor(Math.random() * this.hotkeys.length);
  }
}
