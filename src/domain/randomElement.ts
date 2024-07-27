import {
  Clade,
  exampleOrganisms,
  Organism,
  rootClade,
} from "../organisms/organism";

export function randomElement<T>(array: T[]): T {
  return array[randomIndex(array.length)];
}

export function randomIndex(arrayLength: number): number {
  return Math.floor(Math.random() * arrayLength);
}

export const randomCladeFromOrganism = (organism: Organism): Clade => {
  return randomElement(organism.classification);
};

export const randomClade = (): Clade => {
  if (Math.random() < 0.01) {
    return rootClade;
  }
  return randomCladeFromOrganism(randomElement(exampleOrganisms));
};
