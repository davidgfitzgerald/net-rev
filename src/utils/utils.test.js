import { inflectPlus } from "./utils";

describe("inflectPlus tests", () => {
  test("'answer is' becomes 'answers are' for >1 answers", () => {
    expect(inflectPlus("answer is", 2)).toBe("answers are")
  })

  test("'dogs are' becomes 'dog is' for 1 dog", () => {
    expect(inflectPlus("dogs are", 1)).toBe("dog is")
  })

  test("'the answers were' becomes 'the answer was' for 1 answer", () => {
    expect(inflectPlus("the answers were", 1)).toBe("the answer was")
  })
})
