import { generateQuestionAnswer } from "../nonoLlm";

describe("generateQuestionAnswer", () => {
  it("should generate a question and answer", () => {
    const result = generateQuestionAnswer();
    expect(result).toHaveProperty("question");
    expect(result).toHaveProperty("answer");
  });
});
