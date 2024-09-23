import { describe, expect, test } from "vitest";
import { buildTreeOfLife } from "../buildTreeOfLife";
import { exampleOrganisms } from "../../../organisms/organism";
import { mockUnlockedClades } from "../../../meta/mockUnlockedClades";
import { buildCatalog, getDescendents } from "../catalog";

const testTree = buildTreeOfLife(mockUnlockedClades, exampleOrganisms);
const testCatalog = buildCatalog(testTree);

describe("create a tree based on the organisms and clades", () => {
  test("has exactly two domains", () => {
    expect(testTree.children.length).toBe(2);
    expect(testTree.children[0].clade.level).toBe("Domain");
    expect(testTree.children[1].clade.level).toBe("Domain");
  });

  test("snapshot tree", () => {
    expect(testTree).toStrictEqual({
      clade: { level: "root", value: "Biota" },
      children: [
        {
          clade: { level: "Domain", value: "Eukaryota" },
          children: [
            {
              clade: { level: "Kingdom", value: "Animalia" },
              children: [
                {
                  clade: { level: "Phylum", value: "Chordata" },
                  children: [
                    {
                      clade: { level: "Class", value: "Mammalia" },
                      children: [
                        {
                          clade: { level: "Order", value: "Primates" },
                          children: [
                            {
                              clade: { level: "Suborder", value: "Haplorhini" },
                              children: [
                                {
                                  clade: {
                                    level: "Infraorder",
                                    value: "Simiiformes",
                                  },
                                  children: [
                                    {
                                      clade: {
                                        level: "Family",
                                        value: "Hominidae",
                                      },
                                      children: [
                                        {
                                          clade: {
                                            level: "Subfamily",
                                            value: "Homininae",
                                          },
                                          children: [
                                            {
                                              clade: {
                                                level: "Tribe",
                                                value: "Hominini",
                                              },
                                              children: [
                                                {
                                                  clade: {
                                                    level: "Genus",
                                                    value: "Homo",
                                                  },
                                                  children: [
                                                    {
                                                      clade: {
                                                        level: "Species",
                                                        value: "H. sapiens",
                                                      },
                                                      details: {
                                                        name: "Human",
                                                        sourcePage:
                                                          "https://en.wikipedia.org/wiki/Human",
                                                        imageSource:
                                                          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Akha_cropped_hires.JPG/220px-Akha_cropped_hires.JPG",
                                                      },
                                                    },
                                                  ],
                                                },
                                                {
                                                  clade: {
                                                    level: "Genus",
                                                    value: "Pan",
                                                  },
                                                  children: [
                                                    {
                                                      clade: {
                                                        level: "Species",
                                                        value: "P. troglodytes",
                                                      },
                                                      details: {
                                                        name: "Chimpanzee",
                                                        sourcePage:
                                                          "https://en.wikipedia.org/wiki/Chimpanzee",
                                                        imageSource:
                                                          "//upload.wikimedia.org/wikipedia/commons/thumb/4/42/015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg/220px-015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg",
                                                      },
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                      isUnlocked: true,
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          isUnlocked: true,
                        },
                        {
                          clade: { level: "Order", value: "Carnivora" },
                          children: [
                            {
                              clade: { level: "Suborder", value: "Feliformia" },
                              children: [
                                {
                                  clade: { level: "Family", value: "Felidae" },
                                  children: [
                                    {
                                      clade: {
                                        level: "Subfamily",
                                        value: "Felinae",
                                      },
                                      children: [
                                        {
                                          clade: {
                                            level: "Genus",
                                            value: "Felis",
                                          },
                                          children: [
                                            {
                                              clade: {
                                                level: "Species",
                                                value: "F. catus",
                                              },
                                              details: {
                                                name: "Cat",
                                                sourcePage:
                                                  "https://en.wikipedia.org/wiki/Cat",
                                                imageSource:
                                                  "//upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/181px-Cat_August_2010-4.jpg",
                                              },
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      clade: {
                                        level: "Subfamily",
                                        value: "Pantherinae",
                                      },
                                      children: [
                                        {
                                          clade: {
                                            level: "Genus",
                                            value: "Panthera",
                                          },
                                          children: [
                                            {
                                              clade: {
                                                level: "Species",
                                                value: "P. leo",
                                              },
                                              details: {
                                                name: "Lion",
                                                sourcePage:
                                                  "https://en.wikipedia.org/wiki/Lion",
                                                imageSource:
                                                  "//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg",
                                              },
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                  isUnlocked: true,
                                },
                              ],
                            },
                            {
                              clade: { level: "Family", value: "Canidae" },
                              children: [
                                {
                                  clade: { level: "Genus", value: "Canis" },
                                  children: [
                                    {
                                      clade: {
                                        level: "Species",
                                        value: "C. familiaris",
                                      },
                                      details: {
                                        name: "Dog",
                                        sourcePage:
                                          "https://en.wikipedia.org/wiki/Dog",
                                        imageSource:
                                          "//upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG/91px-Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          isUnlocked: true,
                        },
                        {
                          clade: { level: "Order", value: "Artiodactyla" },
                          children: [
                            {
                              clade: { level: "Infraorder", value: "Cetacea" },
                              children: [
                                {
                                  clade: {
                                    level: "Family",
                                    value: "Balaenopteridae",
                                  },
                                  children: [
                                    {
                                      clade: {
                                        level: "Genus",
                                        value: "Balaenoptera",
                                      },
                                      children: [
                                        {
                                          clade: {
                                            level: "Species",
                                            value: "B. musculus",
                                          },
                                          details: {
                                            name: "Blue Whale",
                                            sourcePage:
                                              "https://en.wikipedia.org/wiki/Blue_whale",
                                            imageSource:
                                              "//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/220px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg",
                                          },
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              isUnlocked: true,
                            },
                          ],
                        },
                      ],
                      isUnlocked: true,
                    },
                    {
                      clade: { level: "Class", value: "Aves" },
                      children: [
                        {
                          clade: { level: "Order", value: "Passeriformes" },
                          children: [
                            {
                              clade: { level: "Family", value: "Corvidae" },
                              children: [
                                {
                                  clade: { level: "Genus", value: "Pica" },
                                  children: [
                                    {
                                      clade: {
                                        level: "Species",
                                        value: "P. pica",
                                      },
                                      details: {
                                        name: "Eurasian Magpie",
                                        sourcePage:
                                          "https://en.wikipedia.org/wiki/Eurasian_magpie",
                                        imageSource:
                                          "//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%D0%A1%D0%BE%D1%80%D0%BE%D0%BA%D0%B0_%28Pica_pica%29%2C_%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4.jpg/220px-%D0%A1%D0%BE%D1%80%D0%BE%D0%BA%D0%B0_%28Pica_pica%29%2C_%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4.jpg",
                                      },
                                    },
                                  ],
                                },
                                {
                                  clade: { level: "Genus", value: "Corvus" },
                                  children: [
                                    {
                                      clade: {
                                        level: "Species",
                                        value: "C. brachyrhynchos",
                                      },
                                      details: {
                                        name: "American Crow",
                                        sourcePage:
                                          "https://en.wikipedia.org/wiki/American_crow",
                                        imageSource:
                                          "//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Corvus-brachyrhynchos-001.jpg/220px-Corvus-brachyrhynchos-001.jpg",
                                      },
                                    },
                                  ],
                                },
                              ],
                              isUnlocked: true,
                            },
                          ],
                          isUnlocked: true,
                        },
                      ],
                      isUnlocked: true,
                    },
                    {
                      clade: { level: "Class", value: "Actinopterygii" },
                      children: [
                        {
                          clade: { level: "Order", value: "Cypriniformes" },
                          children: [
                            {
                              clade: { level: "Family", value: "Cyprinidae" },
                              children: [
                                {
                                  clade: {
                                    level: "Subfamily",
                                    value: "Cyprininae",
                                  },
                                  children: [
                                    {
                                      clade: {
                                        level: "Genus",
                                        value: "Carassius",
                                      },
                                      children: [
                                        {
                                          clade: {
                                            level: "Species",
                                            value: "C. auratus",
                                          },
                                          details: {
                                            name: "Goldfish",
                                            sourcePage:
                                              "https://en.wikipedia.org/wiki/Goldfish",
                                            imageSource:
                                              "//upload.wikimedia.org/wikipedia/commons/thumb/2/25/Common_goldfish.JPG/220px-Common_goldfish.JPG",
                                          },
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      isUnlocked: true,
                    },
                  ],
                  isUnlocked: true,
                },
                {
                  clade: { level: "Phylum", value: "Mollusca" },
                  children: [
                    {
                      clade: { level: "Class", value: "Cephalopoda" },
                      children: [
                        {
                          clade: { level: "Order", value: "Octopoda" },
                          children: [
                            {
                              clade: { level: "Family", value: "Octopodidae" },
                              children: [
                                {
                                  clade: {
                                    level: "Genus",
                                    value: "Hapalochlaena",
                                  },
                                  children: [
                                    {
                                      clade: {
                                        level: "Species",
                                        value: "H. lunulata",
                                      },
                                      details: {
                                        name: "Greater Blue-Ringed Octopus",
                                        sourcePage:
                                          "https://en.wikipedia.org/wiki/Greater_blue-ringed_octopus",
                                        imageSource:
                                          "//upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hapalochlaena_lunulata2.JPG/220px-Hapalochlaena_lunulata2.JPG",
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                      isUnlocked: true,
                    },
                  ],
                  isUnlocked: true,
                },
              ],
              isUnlocked: true,
            },
            {
              clade: { level: "Kingdom", value: "Plantae" },
              children: [
                {
                  clade: { level: "Clade", value: "Tracheophytes" },
                  children: [
                    {
                      clade: { level: "Clade", value: "Angiosperms" },
                      children: [
                        {
                          clade: { level: "Clade", value: "Eudicots" },
                          children: [
                            {
                              clade: { level: "Clade", value: "Rosids" },
                              children: [
                                {
                                  clade: { level: "Order", value: "Rosales" },
                                  children: [
                                    {
                                      clade: {
                                        level: "Family",
                                        value: "Rosaceae",
                                      },
                                      children: [
                                        {
                                          clade: {
                                            level: "Genus",
                                            value: "Malus",
                                          },
                                          children: [
                                            {
                                              clade: {
                                                level: "Species",
                                                value: "M. domestica",
                                              },
                                              details: {
                                                name: "Apple",
                                                sourcePage:
                                                  "https://en.wikipedia.org/wiki/Apple",
                                                imageSource:
                                                  "//upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/220px-Pink_lady_and_cross_section.jpg",
                                              },
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  clade: { level: "Order", value: "Fabales" },
                                  children: [
                                    {
                                      clade: {
                                        level: "Family",
                                        value: "Fabaceae",
                                      },
                                      children: [
                                        {
                                          clade: {
                                            level: "Subfamily",
                                            value: "Faboideae",
                                          },
                                          children: [
                                            {
                                              clade: {
                                                level: "Genus",
                                                value: "Trifolium",
                                              },
                                              children: [
                                                {
                                                  clade: {
                                                    level: "Species",
                                                    value: "T. repens",
                                                  },
                                                  details: {
                                                    name: "White Clover",
                                                    sourcePage:
                                                      "https://en.wikipedia.org/wiki/Trifolium_repens",
                                                    imageSource:
                                                      "//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Trifolium_repens_-_white_clover_on_way_from_Govindghat_to_Gangria_at_Valley_of_Flowers_National_Park_-_during_LGFC_-_VOF_2019_%281%29.jpg/220px-Trifolium_repens_-_white_clover_on_way_from_Govindghat_to_Gangria_at_Valley_of_Flowers_National_Park_-_during_LGFC_-_VOF_2019_%281%29.jpg",
                                                  },
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                              isUnlocked: true,
                            },
                            {
                              clade: {
                                level: "Order",
                                value: "Caryophyllales",
                              },
                              children: [
                                {
                                  clade: {
                                    level: "Family",
                                    value: "Cactaceae",
                                  },
                                  children: [
                                    {
                                      clade: {
                                        level: "Subfamily",
                                        value: "Cactoideae",
                                      },
                                      children: [
                                        {
                                          clade: {
                                            level: "Tribe",
                                            value: "Echinocereeae",
                                          },
                                          children: [
                                            {
                                              clade: {
                                                level: "Genus",
                                                value: "Carnegiea",
                                              },
                                              children: [
                                                {
                                                  clade: {
                                                    level: "Species",
                                                    value: "C. gigantea",
                                                  },
                                                  details: {
                                                    name: "Saguaro Cactus",
                                                    sourcePage:
                                                      "https://en.wikipedia.org/wiki/Saguaro",
                                                    imageSource:
                                                      "//upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg/220px-Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg",
                                                  },
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          isUnlocked: true,
                        },
                      ],
                      isUnlocked: true,
                    },
                    {
                      clade: { level: "Clade", value: "Gymnospermae" },
                      children: [
                        {
                          clade: { level: "Division", value: "Ginkgophyta" },
                          children: [
                            {
                              clade: { level: "Class", value: "Ginkgoopsida" },
                              children: [
                                {
                                  clade: {
                                    level: "Order",
                                    value: "Ginkgoales",
                                  },
                                  children: [
                                    {
                                      clade: {
                                        level: "Family",
                                        value: "Ginkgoaceae",
                                      },
                                      children: [
                                        {
                                          clade: {
                                            level: "Genus",
                                            value: "Ginkgo",
                                          },
                                          children: [
                                            {
                                              clade: {
                                                level: "Species",
                                                value: "G. biloba",
                                              },
                                              details: {
                                                name: "Ginkgo",
                                                sourcePage:
                                                  "https://en.wikipedia.org/wiki/Ginkgo_biloba",
                                                imageSource:
                                                  "//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/GINKGOBAUM-2.jpg/220px-GINKGOBAUM-2.jpg",
                                              },
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                          isUnlocked: true,
                        },
                      ],
                      isUnlocked: true,
                    },
                  ],
                  isUnlocked: true,
                },
              ],
              isUnlocked: true,
            },
          ],
          isUnlocked: true,
        },
        {
          clade: { level: "Domain", value: "Bacteria" },
          children: [
            {
              clade: { level: "Phylum", value: "Pseudomonadota" },
              children: [
                {
                  clade: { level: "Class", value: "Gammaproteobacteria" },
                  children: [
                    {
                      clade: { level: "Order", value: "Enterobacterales" },
                      children: [
                        {
                          clade: {
                            level: "Family",
                            value: "Enterobacteriaceae",
                          },
                          children: [
                            {
                              clade: { level: "Genus", value: "Escherichia" },
                              children: [
                                {
                                  clade: { level: "Species", value: "E. coli" },
                                  details: {
                                    name: "E. coli",
                                    sourcePage:
                                      "https://en.wikipedia.org/wiki/Escherichia_coli",
                                    imageSource:
                                      "//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/E_coli_at_10000x%2C_original.jpg/220px-E_coli_at_10000x%2C_original.jpg",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          isUnlocked: true,
        },
      ],
      isUnlocked: true,
    });
  });
});

describe("converts a tree into a array", () => {
  test("single root and organism make an size 2 array", () => {
    expect(
      buildCatalog({
        clade: { level: "root", value: "Biota" },
        children: [
          {
            clade: {
              level: "Species",
              value: "H. sapiens",
            },
            details: {
              name: "Human",
              sourcePage: "https://en.wikipedia.org/wiki/Human",
              imageSource:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Akha_cropped_hires.JPG/220px-Akha_cropped_hires.JPG",
            },
          },
        ],
        isUnlocked: true,
      }).length
    ).toBe(2);
  });

  test("snapshot indexed tree", () => {
    expect(testCatalog).toEqual([
      {
        clade: { level: "root", value: "Biota" },
        childrenIndex: [1, 78],
        parentIndex: -1,
        index: 0,
        isUnlocked: true,
      },
      {
        clade: { level: "Domain", value: "Eukaryota" },
        childrenIndex: [2, 51],
        parentIndex: 0,
        index: 1,
        isUnlocked: true,
      },
      {
        clade: { level: "Kingdom", value: "Animalia" },
        childrenIndex: [3, 45],
        parentIndex: 1,
        index: 2,
        isUnlocked: true,
      },
      {
        clade: { level: "Phylum", value: "Chordata" },
        childrenIndex: [4, 32, 39],
        parentIndex: 2,
        index: 3,
        isUnlocked: true,
      },
      {
        clade: { level: "Class", value: "Mammalia" },
        childrenIndex: [5, 15, 27],
        parentIndex: 3,
        index: 4,
        isUnlocked: true,
      },
      {
        clade: { level: "Order", value: "Primates" },
        childrenIndex: [6],
        parentIndex: 4,
        index: 5,
        isUnlocked: true,
      },
      {
        clade: { level: "Suborder", value: "Haplorhini" },
        childrenIndex: [7],
        parentIndex: 5,
        index: 6,
      },
      {
        clade: { level: "Infraorder", value: "Simiiformes" },
        childrenIndex: [8],
        parentIndex: 6,
        index: 7,
      },
      {
        clade: { level: "Family", value: "Hominidae" },
        childrenIndex: [9],
        parentIndex: 7,
        index: 8,
        isUnlocked: true,
      },
      {
        clade: { level: "Subfamily", value: "Homininae" },
        childrenIndex: [10],
        parentIndex: 8,
        index: 9,
      },
      {
        clade: { level: "Tribe", value: "Hominini" },
        childrenIndex: [11, 13],
        parentIndex: 9,
        index: 10,
      },
      {
        clade: { level: "Genus", value: "Homo" },
        childrenIndex: [12],
        parentIndex: 10,
        index: 11,
      },
      {
        clade: { level: "Species", value: "H. sapiens" },
        details: {
          name: "Human",
          sourcePage: "https://en.wikipedia.org/wiki/Human",
          imageSource:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Akha_cropped_hires.JPG/220px-Akha_cropped_hires.JPG",
        },
        parentIndex: 11,
        index: 12,
      },
      {
        clade: { level: "Genus", value: "Pan" },
        childrenIndex: [14],
        parentIndex: 10,
        index: 13,
      },
      {
        clade: { level: "Species", value: "P. troglodytes" },
        details: {
          name: "Chimpanzee",
          sourcePage: "https://en.wikipedia.org/wiki/Chimpanzee",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/4/42/015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg/220px-015_Chimpanzee_at_Kibale_forest_National_Park_Photo_by_Giles_Laurent.jpg",
        },
        parentIndex: 13,
        index: 14,
      },
      {
        clade: { level: "Order", value: "Carnivora" },
        childrenIndex: [16, 24],
        parentIndex: 4,
        index: 15,
        isUnlocked: true,
      },
      {
        clade: { level: "Suborder", value: "Feliformia" },
        childrenIndex: [17],
        parentIndex: 15,
        index: 16,
      },
      {
        clade: { level: "Family", value: "Felidae" },
        childrenIndex: [18, 21],
        parentIndex: 16,
        index: 17,
        isUnlocked: true,
      },
      {
        clade: { level: "Subfamily", value: "Felinae" },
        childrenIndex: [19],
        parentIndex: 17,
        index: 18,
      },
      {
        clade: { level: "Genus", value: "Felis" },
        childrenIndex: [20],
        parentIndex: 18,
        index: 19,
      },
      {
        clade: { level: "Species", value: "F. catus" },
        details: {
          name: "Cat",
          sourcePage: "https://en.wikipedia.org/wiki/Cat",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/181px-Cat_August_2010-4.jpg",
        },
        parentIndex: 19,
        index: 20,
      },
      {
        clade: { level: "Subfamily", value: "Pantherinae" },
        childrenIndex: [22],
        parentIndex: 17,
        index: 21,
      },
      {
        clade: { level: "Genus", value: "Panthera" },
        childrenIndex: [23],
        parentIndex: 21,
        index: 22,
      },
      {
        clade: { level: "Species", value: "P. leo" },
        details: {
          name: "Lion",
          sourcePage: "https://en.wikipedia.org/wiki/Lion",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/220px-Lion_waiting_in_Namibia.jpg",
        },
        parentIndex: 22,
        index: 23,
      },
      {
        clade: { level: "Family", value: "Canidae" },
        childrenIndex: [25],
        parentIndex: 15,
        index: 24,
      },
      {
        clade: { level: "Genus", value: "Canis" },
        childrenIndex: [26],
        parentIndex: 24,
        index: 25,
      },
      {
        clade: { level: "Species", value: "C. familiaris" },
        details: {
          name: "Dog",
          sourcePage: "https://en.wikipedia.org/wiki/Dog",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG/91px-Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG",
        },
        parentIndex: 25,
        index: 26,
      },
      {
        clade: { level: "Order", value: "Artiodactyla" },
        childrenIndex: [28],
        parentIndex: 4,
        index: 27,
      },
      {
        clade: { level: "Infraorder", value: "Cetacea" },
        childrenIndex: [29],
        parentIndex: 27,
        index: 28,
        isUnlocked: true,
      },
      {
        clade: { level: "Family", value: "Balaenopteridae" },
        childrenIndex: [30],
        parentIndex: 28,
        index: 29,
      },
      {
        clade: { level: "Genus", value: "Balaenoptera" },
        childrenIndex: [31],
        parentIndex: 29,
        index: 30,
      },
      {
        clade: { level: "Species", value: "B. musculus" },
        details: {
          name: "Blue Whale",
          sourcePage: "https://en.wikipedia.org/wiki/Blue_whale",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/220px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg",
        },
        parentIndex: 30,
        index: 31,
      },
      {
        clade: { level: "Class", value: "Aves" },
        childrenIndex: [33],
        parentIndex: 3,
        index: 32,
        isUnlocked: true,
      },
      {
        clade: { level: "Order", value: "Passeriformes" },
        childrenIndex: [34],
        parentIndex: 32,
        index: 33,
        isUnlocked: true,
      },
      {
        clade: { level: "Family", value: "Corvidae" },
        childrenIndex: [35, 37],
        parentIndex: 33,
        index: 34,
        isUnlocked: true,
      },
      {
        clade: { level: "Genus", value: "Pica" },
        childrenIndex: [36],
        parentIndex: 34,
        index: 35,
      },
      {
        clade: { level: "Species", value: "P. pica" },
        details: {
          name: "Eurasian Magpie",
          sourcePage: "https://en.wikipedia.org/wiki/Eurasian_magpie",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/%D0%A1%D0%BE%D1%80%D0%BE%D0%BA%D0%B0_%28Pica_pica%29%2C_%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4.jpg/220px-%D0%A1%D0%BE%D1%80%D0%BE%D0%BA%D0%B0_%28Pica_pica%29%2C_%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4.jpg",
        },
        parentIndex: 35,
        index: 36,
      },
      {
        clade: { level: "Genus", value: "Corvus" },
        childrenIndex: [38],
        parentIndex: 34,
        index: 37,
      },
      {
        clade: { level: "Species", value: "C. brachyrhynchos" },
        details: {
          name: "American Crow",
          sourcePage: "https://en.wikipedia.org/wiki/American_crow",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Corvus-brachyrhynchos-001.jpg/220px-Corvus-brachyrhynchos-001.jpg",
        },
        parentIndex: 37,
        index: 38,
      },
      {
        clade: { level: "Class", value: "Actinopterygii" },
        childrenIndex: [40],
        parentIndex: 3,
        index: 39,
        isUnlocked: true,
      },
      {
        clade: { level: "Order", value: "Cypriniformes" },
        childrenIndex: [41],
        parentIndex: 39,
        index: 40,
      },
      {
        clade: { level: "Family", value: "Cyprinidae" },
        childrenIndex: [42],
        parentIndex: 40,
        index: 41,
      },
      {
        clade: { level: "Subfamily", value: "Cyprininae" },
        childrenIndex: [43],
        parentIndex: 41,
        index: 42,
      },
      {
        clade: { level: "Genus", value: "Carassius" },
        childrenIndex: [44],
        parentIndex: 42,
        index: 43,
      },
      {
        clade: { level: "Species", value: "C. auratus" },
        details: {
          name: "Goldfish",
          sourcePage: "https://en.wikipedia.org/wiki/Goldfish",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/2/25/Common_goldfish.JPG/220px-Common_goldfish.JPG",
        },
        parentIndex: 43,
        index: 44,
      },
      {
        clade: { level: "Phylum", value: "Mollusca" },
        childrenIndex: [46],
        parentIndex: 2,
        index: 45,
        isUnlocked: true,
      },
      {
        clade: { level: "Class", value: "Cephalopoda" },
        childrenIndex: [47],
        parentIndex: 45,
        index: 46,
        isUnlocked: true,
      },
      {
        clade: { level: "Order", value: "Octopoda" },
        childrenIndex: [48],
        parentIndex: 46,
        index: 47,
      },
      {
        clade: { level: "Family", value: "Octopodidae" },
        childrenIndex: [49],
        parentIndex: 47,
        index: 48,
      },
      {
        clade: { level: "Genus", value: "Hapalochlaena" },
        childrenIndex: [50],
        parentIndex: 48,
        index: 49,
      },
      {
        clade: { level: "Species", value: "H. lunulata" },
        details: {
          name: "Greater Blue-Ringed Octopus",
          sourcePage:
            "https://en.wikipedia.org/wiki/Greater_blue-ringed_octopus",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hapalochlaena_lunulata2.JPG/220px-Hapalochlaena_lunulata2.JPG",
        },
        parentIndex: 49,
        index: 50,
      },
      {
        clade: { level: "Kingdom", value: "Plantae" },
        childrenIndex: [52],
        parentIndex: 1,
        index: 51,
        isUnlocked: true,
      },
      {
        clade: { level: "Clade", value: "Tracheophytes" },
        childrenIndex: [53, 71],
        parentIndex: 51,
        index: 52,
        isUnlocked: true,
      },
      {
        clade: { level: "Clade", value: "Angiosperms" },
        childrenIndex: [54],
        parentIndex: 52,
        index: 53,
        isUnlocked: true,
      },
      {
        clade: { level: "Clade", value: "Eudicots" },
        childrenIndex: [55, 65],
        parentIndex: 53,
        index: 54,
        isUnlocked: true,
      },
      {
        clade: { level: "Clade", value: "Rosids" },
        childrenIndex: [56, 60],
        parentIndex: 54,
        index: 55,
        isUnlocked: true,
      },
      {
        clade: { level: "Order", value: "Rosales" },
        childrenIndex: [57],
        parentIndex: 55,
        index: 56,
      },
      {
        clade: { level: "Family", value: "Rosaceae" },
        childrenIndex: [58],
        parentIndex: 56,
        index: 57,
      },
      {
        clade: { level: "Genus", value: "Malus" },
        childrenIndex: [59],
        parentIndex: 57,
        index: 58,
      },
      {
        clade: { level: "Species", value: "M. domestica" },
        details: {
          name: "Apple",
          sourcePage: "https://en.wikipedia.org/wiki/Apple",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/220px-Pink_lady_and_cross_section.jpg",
        },
        parentIndex: 58,
        index: 59,
      },
      {
        clade: { level: "Order", value: "Fabales" },
        childrenIndex: [61],
        parentIndex: 55,
        index: 60,
      },
      {
        clade: { level: "Family", value: "Fabaceae" },
        childrenIndex: [62],
        parentIndex: 60,
        index: 61,
      },
      {
        clade: { level: "Subfamily", value: "Faboideae" },
        childrenIndex: [63],
        parentIndex: 61,
        index: 62,
      },
      {
        clade: { level: "Genus", value: "Trifolium" },
        childrenIndex: [64],
        parentIndex: 62,
        index: 63,
      },
      {
        clade: { level: "Species", value: "T. repens" },
        details: {
          name: "White Clover",
          sourcePage: "https://en.wikipedia.org/wiki/Trifolium_repens",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Trifolium_repens_-_white_clover_on_way_from_Govindghat_to_Gangria_at_Valley_of_Flowers_National_Park_-_during_LGFC_-_VOF_2019_%281%29.jpg/220px-Trifolium_repens_-_white_clover_on_way_from_Govindghat_to_Gangria_at_Valley_of_Flowers_National_Park_-_during_LGFC_-_VOF_2019_%281%29.jpg",
        },
        parentIndex: 63,
        index: 64,
      },
      {
        clade: { level: "Order", value: "Caryophyllales" },
        childrenIndex: [66],
        parentIndex: 54,
        index: 65,
      },
      {
        clade: { level: "Family", value: "Cactaceae" },
        childrenIndex: [67],
        parentIndex: 65,
        index: 66,
      },
      {
        clade: { level: "Subfamily", value: "Cactoideae" },
        childrenIndex: [68],
        parentIndex: 66,
        index: 67,
      },
      {
        clade: { level: "Tribe", value: "Echinocereeae" },
        childrenIndex: [69],
        parentIndex: 67,
        index: 68,
      },
      {
        clade: { level: "Genus", value: "Carnegiea" },
        childrenIndex: [70],
        parentIndex: 68,
        index: 69,
      },
      {
        clade: { level: "Species", value: "C. gigantea" },
        details: {
          name: "Saguaro Cactus",
          sourcePage: "https://en.wikipedia.org/wiki/Saguaro",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg/220px-Carnegiea_gigantea_in_Saguaro_National_Park_near_Tucson%2C_Arizona_during_November_%2858%29.jpg",
        },
        parentIndex: 69,
        index: 70,
      },
      {
        clade: { level: "Clade", value: "Gymnospermae" },
        childrenIndex: [72],
        parentIndex: 52,
        index: 71,
        isUnlocked: true,
      },
      {
        clade: { level: "Division", value: "Ginkgophyta" },
        childrenIndex: [73],
        parentIndex: 71,
        index: 72,
        isUnlocked: true,
      },
      {
        clade: { level: "Class", value: "Ginkgoopsida" },
        childrenIndex: [74],
        parentIndex: 72,
        index: 73,
      },
      {
        clade: { level: "Order", value: "Ginkgoales" },
        childrenIndex: [75],
        parentIndex: 73,
        index: 74,
      },
      {
        clade: { level: "Family", value: "Ginkgoaceae" },
        childrenIndex: [76],
        parentIndex: 74,
        index: 75,
      },
      {
        clade: { level: "Genus", value: "Ginkgo" },
        childrenIndex: [77],
        parentIndex: 75,
        index: 76,
      },
      {
        clade: { level: "Species", value: "G. biloba" },
        details: {
          name: "Ginkgo",
          sourcePage: "https://en.wikipedia.org/wiki/Ginkgo_biloba",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/GINKGOBAUM-2.jpg/220px-GINKGOBAUM-2.jpg",
        },
        parentIndex: 76,
        index: 77,
      },
      {
        clade: { level: "Domain", value: "Bacteria" },
        childrenIndex: [79],
        parentIndex: 0,
        index: 78,
        isUnlocked: true,
      },
      {
        clade: { level: "Phylum", value: "Pseudomonadota" },
        childrenIndex: [80],
        parentIndex: 78,
        index: 79,
      },
      {
        clade: { level: "Class", value: "Gammaproteobacteria" },
        childrenIndex: [81],
        parentIndex: 79,
        index: 80,
      },
      {
        clade: { level: "Order", value: "Enterobacterales" },
        childrenIndex: [82],
        parentIndex: 80,
        index: 81,
      },
      {
        clade: { level: "Family", value: "Enterobacteriaceae" },
        childrenIndex: [83],
        parentIndex: 81,
        index: 82,
      },
      {
        clade: { level: "Genus", value: "Escherichia" },
        childrenIndex: [84],
        parentIndex: 82,
        index: 83,
      },
      {
        clade: { level: "Species", value: "E. coli" },
        details: {
          name: "E. coli",
          sourcePage: "https://en.wikipedia.org/wiki/Escherichia_coli",
          imageSource:
            "//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/E_coli_at_10000x%2C_original.jpg/220px-E_coli_at_10000x%2C_original.jpg",
        },
        parentIndex: 83,
        index: 84,
      },
    ]);
  });
});

describe("get decendents", () => {
  test("descendents of root is the the whole catalog", () => {
    expect(getDescendents(testCatalog[0], testCatalog)).toEqual(testCatalog);
  });

  test("organisms have no descendents", () => {
    expect(getDescendents(testCatalog[20], testCatalog).length).toEqual(0);
  });

  test("descendents of clade with siblings is calculated correctly", () => {
    expect(getDescendents(testCatalog[56], testCatalog).length).toEqual(3);
  });

  test("descendents of clade with no siblings is calculated correctly", () => {
    expect(getDescendents(testCatalog[6], testCatalog).length).toEqual(8);
  });
});
