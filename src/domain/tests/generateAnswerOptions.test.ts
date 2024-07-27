import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import {
  generateAnswerOptions,
  generateRandomAnswer,
} from "../generateAnswerOptions";
import { rootClade } from "../../organisms/organism";

const ginkgo = {
  name: "Ginkgo",
  sourcePage: "https://en.wikipedia.org/wiki/Ginkgo_biloba",
  imageSource:
    "//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/GINKGOBAUM-2.jpg/220px-GINKGOBAUM-2.jpg",
  classification: [
    { level: "Domain", value: "Eukaryota" },
    { level: "Kingdom", value: "Plantae" },
    { level: "Clade", value: "Tracheophytes" },
    { level: "Clade", value: "Gymnospermae" },
    { level: "Division", value: "Ginkgophyta" },
    { level: "Class", value: "Ginkgoopsida" },
    { level: "Order", value: "Ginkgoales" },
    { level: "Family", value: "Ginkgoaceae" },
    { level: "Genus", value: "Ginkgo" },
    { level: "Species", value: "G. biloba" },
  ],
};

const cycad = {
  name: "Cycads",
  sourcePage: "https://en.wikipedia.org/wiki/Cycad",
  imageSource:
    "//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Cycas_circinalis.jpg/220px-Cycas_circinalis.jpg",
  classification: [
    { level: "Domain", value: "Eukaryota" },
    { level: "Kingdom", value: "Plantae" },
    { level: "Clade", value: "Embryophytes" },
    { level: "Clade", value: "Polysporangiophytes" },
    { level: "Clade", value: "Tracheophytes" },
    { level: "Clade", value: "Spermatophytes" },
    { level: "Clade", value: "Gymnospermae" },
    { level: "Division", value: "Cycadophyta" },
    { level: "Class", value: "Cycadopsida" },

    { level: "Order", value: "Cycadales" },
  ],
};

const eColi = {
  name: "E. coli",
  sourcePage: "https://en.wikipedia.org/wiki/Escherichia_coli",
  imageSource:
    "//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/E_coli_at_10000x%2C_original.jpg/220px-E_coli_at_10000x%2C_original.jpg",
  classification: [
    { level: "Domain", value: "Bacteria" },
    { level: "Phylum", value: "Pseudomonadota" },
    { level: "Class", value: "Gammaproteobacteria" },
    { level: "Order", value: "Enterobacterales" },
    { level: "Family", value: "Enterobacteriaceae" },
    { level: "Genus", value: "Escherichia" },
    { level: "Species", value: "E. coli" },
  ],
};

describe("individual answers", () => {
  const original = Math.random;
  const mockRandom = vi.fn(() => 0.5);

  beforeEach(() => {
    Math.random = mockRandom;
  });

  afterEach(() => {
    Math.random = original;
  });

  test("pull from first organism for low random", () => {
    mockRandom.mockReturnValueOnce(0.1);
    const answer = generateRandomAnswer(ginkgo, cycad);

    expect(answer.matches).toBe("aOnly");
    expect(answer.best).toBe(false);
    // should give a consistent answer with mocked random
    expect(answer.clade).toStrictEqual({
      level: "Class",
      value: "Ginkgoopsida",
    });
  });

  test("pull from first organism for low random and find matches", () => {
    mockRandom.mockReturnValueOnce(0.1).mockReturnValueOnce(0.3);
    const answer = generateRandomAnswer(ginkgo, cycad);

    expect(answer.matches).toBe("both");
    expect(answer.best).toBeUndefined();
    // should give a consistent answer with mocked random
    expect(answer.clade).toStrictEqual({
      level: "Clade",
      value: "Gymnospermae",
    });
  });

  test("pull from second organism for medium random", () => {
    mockRandom.mockReturnValueOnce(0.6);
    const answer = generateRandomAnswer(ginkgo, cycad);

    expect(answer.matches).toBe("bOnly");
    expect(answer.best).toBe(false);
    // should give a consistent answer with mocked random
    expect(answer.clade).toStrictEqual({
      level: "Clade",
      value: "Spermatophytes",
    });
  });

  test("pull from full list for high random", () => {
    mockRandom.mockReturnValueOnce(0.9);
    const answer = generateRandomAnswer(ginkgo, cycad);

    expect(answer.matches).toBe("neither");
    expect(answer.best).toBe(false);
    // should give a consistent answer with mocked random
    expect(answer.clade).toStrictEqual({
      level: "Suborder",
      value: "Feliformia",
    });
  });
});

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators
function* makeRangeIterator(start = 0, end = Infinity, step = 0.1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

describe("answer sets", () => {
  const original = Math.random;
  const numbers = makeRangeIterator();
  const mockRandom = vi.fn(() => numbers.next().value % 1);

  beforeEach(() => {
    Math.random = mockRandom;
  });

  afterEach(() => {
    Math.random = original;
  });

  test("create the given number of answers and one best", () => {
    const answerSet = generateAnswerOptions(ginkgo, cycad, 4);
    expect(answerSet.length).toBe(4);
    expect(answerSet.filter((answer) => answer.best)).toStrictEqual([
      {
        best: true,
        clade: {
          level: "Clade",
          value: "Gymnospermae",
        },
        matches: "both",
      },
    ]);
  });

  test("create the given number of answers and one best, even if best is root", () => {
    const answerSet = generateAnswerOptions(ginkgo, eColi, 4);
    expect(answerSet.length).toBe(4);
    expect(answerSet.filter((answer) => answer.best)).toStrictEqual([
      {
        best: true,
        clade: rootClade,
        matches: "both",
      },
    ]);

    // correct answer isn't neccessarily last
    expect(answerSet[3].best).toBe(false);
  });
});
