import { Answer } from "../generateAnswerOptions";
import {
  randomElement,
  randomIndex,
  twoRandomElements,
} from "../randomElement";
import { sameClade } from "../smallestSharedClade";
import { getAncesters, getDescendents, getSiblings } from "./catalog";
import {
  Catalog,
  IndexedClade,
  IndexedOrganism,
  isIndexedClade,
  isIndexedOrganism,
} from "./treeTypes";

export function chooseTwoOrganismsFromClade(
  clade: IndexedClade,
  catalog: Catalog
): [IndexedOrganism, IndexedOrganism] {
  const possibleOrganisms = getDescendents(clade, catalog).filter(
    isIndexedOrganism
  );
  if (possibleOrganisms.length < 2) {
    throw new Error("only one descendent organism");
  }

  return twoRandomElements(possibleOrganisms);
}

export function randomClade(catalog: Catalog): IndexedClade {
  const possibleClades = catalog
    .filter(isIndexedClade)
    .filter((life) => life.isUnlocked);
  return randomElement(possibleClades);
}

export type QuestionAndAnswers = {
  a: IndexedOrganism;
  b: IndexedOrganism;
  answers: Answer[];
};

export function generateQuestionAndAnswers(
  correct: IndexedClade,
  catalog: Catalog,
  howMany = 4
): QuestionAndAnswers {
  // get organisms
  const descedents = getDescendents(correct, catalog);
  const possibleOrganisms = descedents.filter(isIndexedOrganism);
  const [a, b] = twoRandomElements(possibleOrganisms);
  const aAncesters = getAncesters(a, catalog, correct.index);
  const bAncesters = getAncesters(b, catalog, correct.index);
  const answers: Answer[] = [];
  const possibleAnswers: Record<string, IndexedClade[]> = {
    neither: [...getSiblings(correct, catalog).filter(isIndexedClade)], // red herrings
    aOnly: aAncesters.filter((clade) => !bAncesters.includes(clade)), // parents of a, smaller than common with b
    bOnly: bAncesters.filter((clade) => !aAncesters.includes(clade)), // parents of b, smaller than common with a
    both: getAncesters(correct, catalog).filter((clade) => clade.isUnlocked), // ascendents of correct
  };

  // generate wrong answers
  for (let i = 0; i < howMany - 1; i++) {
    const matches = getRandomTypeOfWrongAnswer();
    const clade = randomElement(possibleAnswers[matches]).clade;

    if (answers.findIndex((answer) => sameClade(answer.clade, clade)) === -1) {
      answers.push({
        clade,
        matches,
      });
      i++;
    }
  }
  // insert correct answer at random index
  answers.splice(randomIndex(howMany - 1), 1, {
    clade: correct.clade,
    matches: "both",
    best: true,
  });

  return { a, b, answers };
}

function getRandomTypeOfWrongAnswer(): "neither" | "aOnly" | "bOnly" | "both" {
  const rand = Math.random();
  if (rand < 0.35) {
    return "aOnly";
  }
  if (rand < 2 * 0.35) {
    return "bOnly";
  }
  if (rand < 0.75) {
    return "neither";
  }
  return "both";
}
