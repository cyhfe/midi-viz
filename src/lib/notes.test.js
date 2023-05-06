import { getNoteName } from "./notes";

it("should return the right note name for a given midi code", () => {
  const result = getNoteName(55);
  expect(result).toEqual("G3");
});
