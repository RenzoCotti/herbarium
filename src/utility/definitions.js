let temp = {
  medicinalProperties: {
    general: [
      "anti-dontalgic",
      "anti-scorbutic",
      "anti-inflammatory",
      "anti-depressant",
      "anti-rheumatic",
      "emollient",
      "antioxidant",
      "aromatic",
      "febrifuge",
      "depurative",
      "emmenagogue",
      "cholagogue",
      "tonic",
      "aphrodisiac",
      "deodorant",
      "calefacient",
      "refreshing"
    ],

    pathogens: [
      "antiseptic",
      "antibiotic",
      "fungicide",
      "anti-viral",
      "insectifuge",
      "anti-allergen",
      "anti-venomous",
      "insecticidal"
    ],

    digestive: [
      "stomachic",
      "excretory",
      "laxative",
      "anti-parasitic",
      "digestive",
      "diuretic",
      "carminative"
    ],

    respiratory: [
      "antispasmodic",
      "decongestant",
      "anti-tussive",
      "anti-asthmatic",
      "expectorant"
    ],

    circulatory: [
      "astringent",
      "haemostatic",
      "anti-coagulant",
      "cardiotonic",
      "styptic"
    ],

    nervous: [
      "relaxant",
      "sedative",
      "anti-neuralgic",
      "analgesic",
      "anaesthetic"
    ]
  },

  leafShape: [
    "acicular",
    "linear",
    "oblong",
    "lanceolate",
    "oblanceolate",
    "ovate",
    "obovate",
    "elliptical",
    "oval",
    "orbicular",
    "reniform",
    "deltate",
    "rhombic",
    "spatulate",
    "flabellate",
    "subdulate",
    "scale"
  ],
  leafArrangement: ["alternate", "opposite", "whorled", "basal"],
  leafMargin: [
    "undulate",
    "sinuate",
    "entire",
    "serrate",
    "doubly serrate",
    "dentate",
    "crenate",
    "lobate",
    "denticulate",
    "aculeate"
  ],
  leafVenation: [
    "dichotomous",
    "palmate",
    "parallel",
    "pinnate",
    "pinnipalmate"
  ],
  plantTypes: [
    "herb",
    "tree",
    "succulent",
    "bush",
    "vines",
    "ferns",
    "algae",
    "moss"
    //add more?
  ],
  months: [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
  ],
  regions: [
    "africa",
    "europe",
    "middle-east",
    "america",
    "east-europe",
    "north-america",
    "oceania",
    "asia",
    "south-america",
    "caribbean"
  ]
};

temp.fullMedicinalProperties = [].concat.apply(
  [],
  Object.keys(temp.medicinalProperties).map(k => {
    return temp.medicinalProperties[k];
  })
);

module.exports = temp;
