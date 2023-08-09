import { generateRandomString } from "../utils";

describe("generateRandomString", () => {
  it("should generate a string of the given length", () => {
    const length = 10;
    const result = generateRandomString(length);
    expect(result).toHaveLength(length);
  });
});
