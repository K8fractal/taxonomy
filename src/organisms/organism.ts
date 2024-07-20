export type Clade = {
  level: string;
  value: string;
};

export type Organism = {
  name: string;
  sourcePage: string;
  imageSource: string;
  classification: Clade[];
};

export const exampleOrganisms: Organism[] = [
  {
    name: "Human",
    sourcePage: "https://en.wikipedia.org/wiki/Human",
    imageSource:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Akha_cropped_hires.JPG/220px-Akha_cropped_hires.JPG",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Animalia" },
      { level: "Phylum", value: "Chordata" },
      { level: "Class", value: "Mammalia" },
      { level: "Order", value: "Primates" },
      { level: "Suborder", value: "Haplorhini" },
      { level: "Infraorder", value: "Simiiformes" },
      { level: "Family", value: "Hominidae" },
      { level: "Subfamily", value: "Homininae" },
      { level: "Tribe", value: "Hominini" },
      { level: "Genus", value: "Homo" },
      { level: "Species", value: "H. sapiens" },
    ],
  },
  {
    name: "Cat",
    sourcePage: "https://en.wikipedia.org/wiki/Cat",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/181px-Cat_August_2010-4.jpg",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Animalia" },
      { level: "Phylum", value: "Chordata" },
      { level: "Class", value: "Mammalia" },
      { level: "Order", value: "Carnivora" },
      { level: "Suborder", value: "Feliformia" },
      { level: "Family", value: "Felidae" },
      { level: "Subfamily", value: "Felinae" },
      { level: "Genus", value: "Felis" },
      { level: "Species", value: "F. catus" },
    ],
  },
  {
    name: "Dog",
    sourcePage: "https://en.wikipedia.org/wiki/Dog",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG/91px-Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Animalia" },
      { level: "Phylum", value: "Chordata" },
      { level: "Class", value: "Mammalia" },
      { level: "Order", value: "Carnivora" },
      { level: "Family", value: "Canidae" },
      { level: "Genus", value: "Canis" },
      { level: "Species", value: "C. familiaris" },
    ],
  },
  {
    name: "Apple",
    sourcePage: "https://en.wikipedia.org/wiki/Apple",
    imageSource: "https://en.wikipedia.org/wiki/Apple",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Plantae" },
      { level: "Clade", value: "Tracheophytes" },
      { level: "Clade", value: "Angiosperms" },
      { level: "Clade", value: "Eudicots" },
      { level: "Clade", value: "Rosids" },
      { level: "Order", value: "Rosales" },
      { level: "Family", value: "Rosaceae" },
      { level: "Genus", value: "Malus" },
      { level: "Species", value: "M. domestica" },
    ],
  },
  {
    name: "Saguaro Cactus",
    sourcePage: "https://en.wikipedia.org/wiki/Saguaro",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg/220px-Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Plantae" },
      { level: "Clade", value: "Tracheophytes" },
      { level: "Clade", value: "Angiosperms" },
      { level: "Clade", value: "Eudicots" },
      { level: "Order", value: "Caryophyllales" },
      { level: "Family", value: "Cactaceae" },
      { level: "Subfamily", value: "Cactoideae" },
      { level: "Tribe", value: "Echinocereeae" },
      { level: "Genus", value: "Carnegiea" },
      { level: "Species", value: "C. gigantea" },
    ],
  },
  {
    name: "Eurasian Magpie",
    sourcePage: "https://en.wikipedia.org/wiki/Eurasian_magpie",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%D0%A1%D0%BE%D1%80%D0%BE%D0%BA%D0%B0_%28Pica_pica%29%2C_%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4.jpg/220px-%D0%A1%D0%BE%D1%80%D0%BE%D0%BA%D0%B0_%28Pica_pica%29%2C_%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4.jpg",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Animalia" },
      { level: "Phylum", value: "Chordata" },
      { level: "Class", value: "Aves" },
      { level: "Order", value: "Passeriformes" },
      { level: "Family", value: "Corvidae" },
      { level: "Genus", value: "Pica" },
      { level: "Species", value: "P. pica" },
    ],
  },
  {
    name: "Chimpanzee",
    sourcePage: "https://en.wikipedia.org/wiki/Chimpanzee",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/4/42/015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg/220px-015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Animalia" },
      { level: "Phylum", value: "Chordata" },
      { level: "Class", value: "Mammalia" },
      { level: "Order", value: "Primates" },
      { level: "Suborder", value: "Haplorhini" },
      { level: "Infraorder", value: "Simiiformes" },
      { level: "Family", value: "Hominidae" },
      { level: "Subfamily", value: "Homininae" },
      { level: "Tribe", value: "Hominini" },
      { level: "Genus", value: "Pan" },
      { level: "Species", value: "P. troglodytes" },
    ],
  },
  {
    name: "Lion",
    sourcePage: "https://en.wikipedia.org/wiki/Lion",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Animalia" },
      { level: "Phylum", value: "Chordata" },
      { level: "Class", value: "Mammalia" },
      { level: "Order", value: "Carnivora" },
      { level: "Suborder", value: "Feliformia" },
      { level: "Family", value: "Felidae" },
      { level: "Subfamily", value: "Pantherinae" },
      { level: "Genus", value: "Panthera" },
      { level: "Species", value: "P. leo" },
    ],
  },
  {
    name: "Blue Whale",
    sourcePage: "https://en.wikipedia.org/wiki/Blue_whale",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/220px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Animalia" },
      { level: "Phylum", value: "Chordata" },
      { level: "Class", value: "Mammalia" },
      { level: "Order", value: "Artiodactyla" },
      { level: "Infraorder", value: "Cetacea" },
      { level: "Family", value: "Balaenopteridae" },
      { level: "Genus", value: "Balaenoptera" },
      { level: "Species", value: "B. musculus" },
    ],
  },
  {
    name: "American Crow",
    sourcePage: "https://en.wikipedia.org/wiki/American_crow",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Corvus-brachyrhynchos-001.jpg/220px-Corvus-brachyrhynchos-001.jpg",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Animalia" },
      { level: "Phylum", value: "Chordata" },
      { level: "Class", value: "Aves" },
      { level: "Order", value: "Passeriformes" },
      { level: "Family", value: "Corvidae" },
      { level: "Genus", value: "Corvus" },
      { level: "Species", value: "C. brachyrhynchos" },
    ],
  },
  {
    name: "Goldfish",
    sourcePage: "https://en.wikipedia.org/wiki/Goldfish",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/2/25/Common_goldfish.JPG/220px-Common_goldfish.JPG",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Animalia" },
      { level: "Phylum", value: "Chordata" },
      { level: "Class", value: "Actinopterygii" },
      { level: "Order", value: "Cypriniformes" },
      { level: "Family", value: "Cyprinidae" },
      { level: "Subfamily", value: "Cyprininae" },
      { level: "Genus", value: "Carassius" },
      { level: "Species", value: "C. auratus" },
    ],
  },
  {
    name: "White Clover",
    sourcePage: "https://en.wikipedia.org/wiki/Trifolium_repens",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Trifolium_repens_-_white_clover_on_way_from_Govindghat_to_Gangria_at_Valley_of_Flowers_National_Park_-_during_LGFC_-_VOF_2019_%281%29.jpg/220px-Trifolium_repens_-_white_clover_on_way_from_Govindghat_to_Gangria_at_Valley_of_Flowers_National_Park_-_during_LGFC_-_VOF_2019_%281%29.jpg",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Plantae" },
      { level: "Clade", value: "Tracheophytes" },
      { level: "Clade", value: "Angiosperms" },
      { level: "Clade", value: "Eudicots" },
      { level: "Clade", value: "Rosids" },
      { level: "Order", value: "Fabales" },
      { level: "Family", value: "Fabaceae" },
      { level: "Subfamily", value: "Faboideae" },
      { level: "Genus", value: "Trifolium" },
      { level: "Species", value: "T. repens" },
    ],
  },
  {
    name: "E. coli",
    sourcePage: "https://en.wikipedia.org/wiki/Escherichia_coli",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/E_coli_at_10000x%2C_original.jpg/220px-E_coli_at_10000x%2C_original.jpg",
    classification: [
      { level: "Domain", value: "Bacteria" },
      { level: "Phylum", value: "Pseudomonadota" },
      { level: "Class", value: "Gammaproteobacteria" },
      { level: "Order", value: "Enterobacterales" },
      { level: "Family", value: "Enterobacteriaceae" },
      { level: "Genus", value: "Escherichia" },
      { level: "Species", value: "E. coli" },
    ],
  },
  {
    name: "Greater Blue-Ringed Octopus",
    sourcePage: "https://en.wikipedia.org/wiki/Greater_blue-ringed_octopus",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hapalochlaena_lunulata2.JPG/220px-Hapalochlaena_lunulata2.JPG",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Animalia" },
      { level: "Phylum", value: "Mollusca" },
      { level: "Class", value: "Cephalopoda" },
      { level: "Order", value: "Octopoda" },
      { level: "Family", value: "Octopodidae" },
      { level: "Genus", value: "Hapalochlaena" },
      { level: "Species", value: "H. lunulata" },
    ],
  },
  {
    name: "Ginkgo",
    sourcePage: "https://en.wikipedia.org/wiki/Ginkgo_biloba",
    imageSource:
      "//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/GINKGOBAUM-2.jpg/220px-GINKGOBAUM-2.jpg",
    classification: [
      { level: "Domain", value: "Eukaryota" },
      { level: "Kingdom", value: "Plantae" },
      { level: "Clade", value: "Tracheophytes" },
      { level: "Clade", value: "Gymnospermae" },
      { level: "Division", value: "Ginkgophyta" },
      { level: "Class", value: "Ginkgoopsida" },
      { level: "Order", value: "Ginkgoales" },
      { level: "Family", value: "Ginkgoaceae" },
      { level: "Genus", value: "Ginkgo" },
      { level: "Species", value: "G. biloba" },
    ],
  },
];

// ,
//   {
//     name: '',
//     sourcePage: '',
//     imageSource: '',
//     classification: [

//     ]
//   }
