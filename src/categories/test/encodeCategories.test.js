import encodeCategories from "../encodeCategories";

it("should encode categories", () => {
  var encodedNumber = encodeCategories([
    { value: "cat1", i: 0 },
    { value: "cat2", i: 1 },
    { value: "cat3", i: 2 }
  ]);
  expect(encodedNumber).toBe(1 + 2 + 4);
});

it("should encode categories2", () => {
  var encodedNumber = encodeCategories([
    { value: "cat1", i: 0 },
    { value: "cat3", i: 2 },
    { value: "cat4", i: 3 }
  ]);
  expect(encodedNumber).toBe(1 + 4 + 8);
});

it("should encode categories when no categories passed", () => {
  var encodedNumber = encodeCategories([]);
  expect(encodedNumber).toBe(0);
});
