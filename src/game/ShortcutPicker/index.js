import { maxHistoryLength } from "../consts";
import { ShouldRepick } from "./RepickPolicy";

export default class RandomShortcutPicker {
  constructor(categoriesIndices, hotkeysJson) {
    this.categories = categoriesIndices.map(c => Object.keys(hotkeysJson)[c]);
    this.hotkeys = this.categories.reduce((array, categoryName) => {
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
    var excludedListForCategories = excludedList.filter(i =>
      this.categories.includes(i.categoryName)
    );

    while (
      ShouldRepick(
        this.hotkeys,
        this.history,
        excludedListForCategories,
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
