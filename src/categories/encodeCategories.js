export default function encodeCategories(chosenCategories) {
  return chosenCategories.reduce((curr, next) => curr + Math.pow(2, next.i), 0);
}
