export default function decodeCategories(encodedInt) {
  let i = 0;
  const arr = [0];
  while (arr[arr.length - 1] <= encodedInt) {
    arr.push(Math.pow(2, i++));
  }
  arr.pop();

  let aggr = 0;
  const res = [];

  for (let item of arr.reverse()) {
    if (aggr + item <= encodedInt) {
      aggr += item;
      res.push(Math.log2(item));
    }

    if (aggr === encodedInt) {
      return res;
    }
  }
  return res;
}
