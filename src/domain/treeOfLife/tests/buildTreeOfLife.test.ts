import { describe, expect, test } from "vitest";
import { buildTreeOfLife } from "../buildTreeOfLife";
import { exampleOrganisms } from "../../../organisms/organism";
import { mockUnlockedClades } from "../../../meta/mockUnlockedClades";

describe("create a tree based on the organisms and clades", () => {
  const testTree = buildTreeOfLife(mockUnlockedClades, exampleOrganisms);

  test("has exactly two domains", () => {
    expect(testTree.children.length).toBe(2);
    expect(testTree.children[0].clade.level).toBe("Domain");
    expect(testTree.children[1].clade.level).toBe("Domain");
  });

  test("snapshot", () => {
    console.log(JSON.stringify(testTree));
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
