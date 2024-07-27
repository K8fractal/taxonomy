import { Clade, Organism } from "../organisms/organism";
import { sameClade } from "./smallestSharedClade";

export function cladeMatchesOrganism(
  clade: Clade,
  organism: Organism
): boolean {
  return organism.classification.some((organismsClade) =>
    sameClade(organismsClade, clade)
  );
}
