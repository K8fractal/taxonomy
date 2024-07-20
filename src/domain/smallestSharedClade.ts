import { Clade, Organism } from "../organisms/organism";

const sameClade = (a: Clade, b: Clade): boolean => {
  return a.level === b.level && a.value === b.value;
};

export const smallestSharedClade = (a: Organism, b: Organism): Clade => {
  let sharedClade: Clade = { level: "root", value: "Biota" };

  for (
    let ai = 0, bi = 0;
    ai < a.classification.length && bi < b.classification.length;
    ai++, bi++
  ) {
    if (sameClade(a.classification[ai], b.classification[bi])) {
      sharedClade = a.classification[ai];
    } else {
      // is a's clade in b's classification?
      const matchedBi = b.classification.findIndex((clade) =>
        sameClade(clade, a.classification[ai])
      );
      if (matchedBi !== -1) {
        // found. Update bi
        bi = matchedBi;
        sharedClade = a.classification[ai];
      } else {
        // check for b's clade in a's classification
        const matchedAi = a.classification.findIndex((clade) =>
          sameClade(clade, b.classification[bi])
        );
        if (matchedAi !== -1) {
          // found. Update ai
          ai = matchedAi;
          sharedClade = b.classification[bi];
        } else {
          // no matches
          break;
        }
      }
    }
  }
  return sharedClade;
};
