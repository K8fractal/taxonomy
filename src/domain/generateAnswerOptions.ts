import { Clade, Organism } from "../organisms/organism";
import { cladeMatchesOrganism } from "./cladeMatchesOrganism";
import {
  randomClade,
  randomCladeFromOrganism,
  randomIndex,
} from "./randomElement";
import { sameClade, smallestSharedClade } from "./smallestSharedClade";

type Answer = {
  clade: Clade;
  matches: "neither" | "aOnly" | "bOnly" | "both";
  best?: boolean;
};

export function generateAnswerOptions(
  a: Organism,
  b: Organism,
  howMany: number
): Answer[] {
  const result: Answer[] = [];
  for (let i = 0; i < howMany - 1; i++) {
    result.push(generateRandomAnswer(a, b));
  }
  let bestIndex = result.findIndex((answer) => answer.matches === "both");
  if (bestIndex < 0) {
    // no matches, generate the best possible answer and insert at a random location
    result.splice(randomIndex(howMany - 1), 0, {
      clade: smallestSharedClade(a, b),
      matches: "both",
      best: true,
    });
  } else {
    // valid answer exists
    // get another answer
    result.push(generateRandomAnswer(a, b));
    // figure out best answer index
    let smallestCladeIndexInClassification = -1;
    result.forEach((answer, index) => {
      if (answer.matches === "both") {
        const answerIndexInClassification = a.classification.findIndex(
          (clade) => sameClade(clade, answer.clade)
        );
        if (smallestCladeIndexInClassification < answerIndexInClassification) {
          smallestCladeIndexInClassification = answerIndexInClassification;
          bestIndex = index;
        }
      }
    });
    result[bestIndex].best = true;
  }

  return result;
}

const defaultChanceOfCladeFromOrganism = 0.42;

export function generateRandomAnswer(
  a: Organism,
  b: Organism,
  chanceOfCladeFromOrganism: number = defaultChanceOfCladeFromOrganism
): Answer {
  const random = Math.random();
  if (random < chanceOfCladeFromOrganism) {
    // pick from a
    const clade = randomCladeFromOrganism(a);
    if (cladeMatchesOrganism(clade, b)) {
      return { clade, matches: "both" };
    }
    return { clade, matches: "aOnly", best: false };
  }

  if (random < 2 * chanceOfCladeFromOrganism) {
    // pick from b
    const clade = randomCladeFromOrganism(b);
    if (cladeMatchesOrganism(clade, a)) {
      return { clade, matches: "both" };
    }
    return { clade, matches: "bOnly", best: false };
  }

  // pick from full list
  const clade = randomClade();
  if (cladeMatchesOrganism(clade, a)) {
    if (cladeMatchesOrganism(clade, b)) {
      return { clade, matches: "both" };
    }
    return { clade, matches: "aOnly", best: false };
  }
  if (cladeMatchesOrganism(clade, b)) {
    return { clade, matches: "bOnly", best: false };
  }
  return { clade, matches: "neither", best: false };
}
