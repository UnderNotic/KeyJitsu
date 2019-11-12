export default function decodeCategories(decodedEnumInt, categoiesList) {
  let i = 0;
  const arr = [0];
  while (arr[arr.length - 1] <= decodedEnumInt) {
    arr.push(Math.pow(2, i++));
  }
  arr.pop();

  let aggr = 0;
  const res = [];

  for (let item of arr.reverse()) {
    if (aggr + item <= decodedEnumInt) {
      aggr += item;
      res.push(item);
    }

    if (aggr === decodedEnumInt) {
      return res;
    }
  }
  return res;
}
