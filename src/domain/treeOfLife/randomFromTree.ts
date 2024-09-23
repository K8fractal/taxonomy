/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: fix and remove warning (this is currently a stub file)
import { randomElement, twoRandomElements } from "../randomElement";
import { getDescendents } from "./catalog";
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
