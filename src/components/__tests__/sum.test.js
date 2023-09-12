import { sum } from "../sum";

test("sum function should return the sum of 2 values", () => {
  const result = sum(4, 6);

  //Assertion
  expect(result).toBe(10);
});
