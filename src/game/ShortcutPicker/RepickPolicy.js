export function ShouldRepick(
  hotkeys,
  history,
  excludedList,
  maxHistoryLength,
  pickedIndex
) {
  const isEverythingExcluded = hotkeys.length <= excludedList.length;

  const shouldExcludeHotkeysFromHistory =
    hotkeys.length > maxHistoryLength &&
    new Set([
      ...history.map(i => hotkeys[i].name),
      ...excludedList.map(s => s.name)
    ]).size <=
      hotkeys.length - 1;

  const isExcluded = !!excludedList.find(s => {
    return s.name === hotkeys[pickedIndex].name;
  });

  const wasRecentlyPicked = history.includes(pickedIndex);

  if (isEverythingExcluded) {
    if (shouldExcludeHotkeysFromHistory) {
      return wasRecentlyPicked;
    }
    return false;
  } else if (shouldExcludeHotkeysFromHistory) {
    return wasRecentlyPicked || isExcluded;
  } else {
    return isExcluded;
  }
}
