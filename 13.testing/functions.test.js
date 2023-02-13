import { product, sum } from "./functions.js";

/* TESTEN VAN SUM FUNCTIONALITEIT */
describe("TESTING SUM FUNCTIONALITY", () => {
  // TEST1 sum(4,4) => 8 ?
  test("sum of 4 and 4 should return 8", function () {
    expect(sum(4, 4)).toBe(8);
  });
  // TEST2 sum() => ERROR
  test("get sum without arguments should return error", function () {
    expect(() => sum()).toThrow("first required argument is not provided");
  });
  // TEST3 sum(5) => ERROR
  test("get sum with 1 argument should return error", function () {
    expect(() => sum(6)).toThrow("second required argument is not provided");
  });
});
/* TESTEN VAN PRODUCT FUNCTIONALITEIT */
// TEST4 product(3,2) => 6 ?
test("product of 3 and 2 should return 6", function () {
  expect(product(3, 2)).toBe(6);
});
// TEST5 product() => ERROR
test("get product without arguments should return error", function () {
  expect(() => product()).toThrow("first required argument is not provided");
});
// TEST6 product(5) => ERROR
test("get product with 1 argument should return error", function () {
  expect(() => product(5)).toThrow("second required argument is not provided");
});
