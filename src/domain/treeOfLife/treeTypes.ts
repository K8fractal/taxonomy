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
