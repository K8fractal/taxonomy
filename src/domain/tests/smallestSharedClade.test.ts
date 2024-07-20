import { expect, test } from "vitest";
import { smallestSharedClade } from "../smallestSharedClade";

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

test("can handle extra clades in second organism", () => {
  expect(smallestSharedClade(ginkgo, cycad)).toStrictEqual({
    level: "Clade",
    value: "Gymnospermae",
  });
});

test("can handle extra clades in first organism", () => {
  expect(smallestSharedClade(cycad, ginkgo)).toStrictEqual({
    level: "Clade",
    value: "Gymnospermae",
  });
});

test("should find Species when matching an organism with itself", () => {
  expect(smallestSharedClade(ginkgo, ginkgo)).toStrictEqual({
    level: "Species",
    value: "G. biloba",
  });
});

test("should return 'Biota' if no matches", () => {
  expect(smallestSharedClade(ginkgo, eColi).value).toBe("Biota");
});
