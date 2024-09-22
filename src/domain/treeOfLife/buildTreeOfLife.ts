import { Clade, Organism, rootClade } from "../../organisms/organism";
import { sameClade } from "../smallestSharedClade";
import { CladeNode, isCladeNode } from "./treeTypes";

export const buildTreeOfLife = (
  clades: Clade[],
  organisms: Organism[]
): CladeNode => {
  const tree: CladeNode = {
    clade: rootClade,
    children: [],
  };
  organisms.forEach((organism) => insertOrganism(tree, organism));
  clades.forEach((clade) => markUnlocked(tree, clade));

  return tree;
};

const markUnlocked = (tree: CladeNode, clade: Clade): void => {
  if (sameClade(tree.clade, clade)) {
    tree.isUnlocked = true;
    return;
  }
  tree.children.forEach((child) => {
    if (isCladeNode(child)) {
      markUnlocked(child, clade);
    }
  });
};

function insertOrganism(
  tree: CladeNode,
  organism: Organism,
  remainingClassification: Clade[] = organism.classification
): void {
  if (remainingClassification.length === 1) {
    // we reached the species
    const { name, sourcePage, imageSource } = organism;
    tree.children.push({
      clade: remainingClassification[0],
      details: { name, sourcePage, imageSource },
    });
    return;
  }
  const matchingChild = tree.children.find((child) =>
    sameClade(child.clade, remainingClassification[0])
  );
  if (matchingChild && isCladeNode(matchingChild)) {
    insertOrganism(matchingChild, organism, remainingClassification.slice(1));
    return;
  }
  // Add the clade
  const newClade = {
    clade: remainingClassification[0],
    children: [],
  };
  tree.children.push(newClade);
  insertOrganism(newClade, organism, remainingClassification.slice(1));
}
