import {
  Catalog,
  CladeNode,
  IndexedClade,
  IndexedLife,
  isCladeNode,
  isIndexedOrganism,
  LifeNode,
} from "./treeTypes";

const NO_PARENT = -1;

export const buildCatalog = (tree: CladeNode): Catalog => {
  const result: IndexedLife[] = [];
  buildCatalogRecurs(tree, result, NO_PARENT);
  return result;
};

export const buildCatalogRecurs = (
  node: LifeNode,
  catalog: Catalog,
  parentIndex: number
): number => {
  const index = catalog.length;
  if (!isCladeNode(node)) {
    // organism
    catalog.push({
      clade: node.clade,
      details: node.details,
      parentIndex,
      index,
    });
    return index;
  }
  // clade
  const newIndexedClade: IndexedClade = {
    clade: node.clade,
    childrenIndex: [],
    parentIndex,
    index,
    isUnlocked: node.isUnlocked,
  };
  catalog.push(newIndexedClade);
  newIndexedClade.childrenIndex = node.children.map((child) =>
    buildCatalogRecurs(child, catalog, index)
  );

  return index;
};

export const getParent = (
  life: IndexedLife,
  catalog: Catalog
): IndexedClade | undefined => {
  if (life.parentIndex === NO_PARENT) {
    return undefined;
  }
  return catalog[life.parentIndex] as IndexedClade;
};

export const getChildren = (
  life: IndexedLife,
  catalog: Catalog
): IndexedLife[] => {
  if (isIndexedOrganism(life)) {
    return [];
  }
  return life.childrenIndex.map((childIndex) => catalog[childIndex]);
};

// This function only works for catalogs built with buildCatalog
export const getDescendents = (
  life: IndexedLife,
  catalog: Catalog
): Array<IndexedLife> => {
  if (life.parentIndex === NO_PARENT) {
    // This is the root
    return catalog;
  }
  if (isIndexedOrganism(life)) {
    return [];
  }

  return catalog.slice(life.index + 1, getEnd(life, catalog));
};

const getEnd = (life: IndexedLife, catalog: Catalog): number | undefined => {
  const parent = getParent(life, catalog);
  if (!parent) {
    return undefined;
  }
  const nextSibling =
    parent.childrenIndex[
      parent.childrenIndex.findIndex((child) => child === life.index) + 1
    ];
  if (nextSibling) {
    return nextSibling;
  }
  return getEnd(parent, catalog);
};

export const getAncesters = (
  life: IndexedLife,
  catalog: Catalog,
  upToIndex = -1
): Array<IndexedClade> => {
  if (life.parentIndex === upToIndex) {
    return [];
  }
  const parent = getParent(life, catalog);

  return parent ? [parent, ...getAncesters(parent, catalog, upToIndex)] : [];
};

export const getSiblings = (
  life: IndexedLife,
  catalog: Catalog
): Array<IndexedLife> => {
  const parent = getParent(life, catalog);
  if (!parent) {
    return [];
  }
  return parent.childrenIndex
    .filter((i) => i !== life.index)
    .map((i) => catalog[i]);
};
