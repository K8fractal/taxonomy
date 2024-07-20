import { Clade, Organism } from "../organisms/organism";

export function randomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export const randomCladeFromOrganism = (organism: Organism): Clade => {
  return randomElement(organism.classification);
};
