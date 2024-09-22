import { Clade, rootClade } from "../organisms/organism";

export const mockUnlockedClades: Clade[] = [
  rootClade,
  { level: "Domain", value: "Eukaryota" },
  { level: "Kingdom", value: "Animalia" },
  { level: "Phylum", value: "Chordata" },
  { level: "Class", value: "Mammalia" },
  { level: "Order", value: "Carnivora" },
  { level: "Kingdom", value: "Plantae" },
  { level: "Clade", value: "Tracheophytes" },
  { level: "Clade", value: "Angiosperms" },
  { level: "Clade", value: "Eudicots" },
  { level: "Clade", value: "Rosids" },
  { level: "Class", value: "Aves" },
  { level: "Order", value: "Passeriformes" },
  { level: "Family", value: "Corvidae" },
  { level: "Order", value: "Primates" },
  { level: "Family", value: "Felidae" },
  { level: "Family", value: "Hominidae" },
  { level: "Infraorder", value: "Cetacea" },
  { level: "Class", value: "Actinopterygii" },
  { level: "Clade", value: "Gymnospermae" },
  { level: "Division", value: "Ginkgophyta" },
  { level: "Domain", value: "Bacteria" },
  { level: "Phylum", value: "Mollusca" },
  { level: "Class", value: "Cephalopoda" },
];

export const getUnlockedClades = () => mockUnlockedClades;
