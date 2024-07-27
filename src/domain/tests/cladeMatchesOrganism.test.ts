import { expect, test } from "vitest";
import { cladeMatchesOrganism } from "../cladeMatchesOrganism";
import { Organism } from "../../organisms/organism";

const dog: Organism = {
  name: "Dog",
  sourcePage: "https://en.wikipedia.org/wiki/Dog",
  imageSource:
    "//upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG/91px-Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG",
  classification: [
    { level: "Domain", value: "Eukaryota" },
    { level: "Kingdom", value: "Animalia" },
    { level: "Phylum", value: "Chordata" },
    { level: "Class", value: "Mammalia" },
    { level: "Order", value: "Carnivora" },
    { level: "Family", value: "Canidae" },
    { level: "Genus", value: "Canis" },
    { level: "Species", value: "C. familiaris" },
  ],
};

test("matches if organism is in clade", () => {
  expect(cladeMatchesOrganism({ level: "Class", value: "Mammalia" }, dog)).toBe(
    true
  );
});

test("does not match if organism is in not clade", () => {
  expect(
    cladeMatchesOrganism({ level: "Class", value: "not a real class" }, dog)
  ).toBe(false);
});

test("does not match if clade level is not matched", () => {
  expect(
    cladeMatchesOrganism({ level: "Domain", value: "Mammalia" }, dog)
  ).toBe(false);
});
