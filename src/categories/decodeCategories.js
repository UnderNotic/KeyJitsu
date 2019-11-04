export default function decodeCategories(chosenCategories) {
  return chosenCategories.reduce(
    (curr, next) => curr + Math.pow(next.i + 1, 2),
    0
  );
}
