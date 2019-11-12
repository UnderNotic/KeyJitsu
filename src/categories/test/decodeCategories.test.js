import decodeCategories from "../decodeCategories";

it("should decode categories", () => {
  var encodedNumber = decodeCategories(5);
  expect(encodedNumber.length).toBe(2);
  expect(encodedNumber).toEqual(expect.arrayContaining([4, 1]));
});

it("should decode categories2", () => {
  var encodedNumber = decodeCategories(8);
  expect(encodedNumber.length).toBe(1);
  expect(encodedNumber).toEqual(expect.arrayContaining([8]));
});

it("should not go into infite loop when wrong parameter", () => {
  decodeCategories(6);
  decodeCategories(0);
  decodeCategories(-1);
});
