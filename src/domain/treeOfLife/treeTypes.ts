import { Clade, Organism } from "../../organisms/organism";

export type LifeNode = CladeNode | OrganismNode;

export type OrganismDetails = Omit<Organism, "classification">;

export type CladeNode = {
  clade: Clade;
  children: LifeNode[];
  isUnlocked?: boolean;
};

export type OrganismNode = {
  clade: Clade; // The species clade
  details: OrganismDetails;
};

export function isCladeNode(node: LifeNode): node is CladeNode {
  return "children" in node;
}

export type IndexedLife = IndexedClade | IndexedOrganism;

export type IndexedClade = {
  clade: Clade;
  childrenIndex: number[];
  parentIndex: number;
  index: number;
  isUnlocked?: boolean;
};

export type IndexedOrganism = {
  clade: Clade; // The species clade
  details: OrganismDetails;
  parentIndex: number;
  index: number;
};

export function isIndexedClade(i: IndexedLife): i is IndexedClade {
  return "childrenIndex" in i;
}

export function isIndexedOrganism(i: IndexedLife): i is IndexedOrganism {
  return "details" in i;
}

export type Catalog = Array<IndexedLife>;
