let temp = {
  medicinalGeneral: [
    "anti-dontalgic",
    "anti-scorbutic",
    "anti-inflammatory",
    "emollient",
    "antioxidant",
    "aromatic",
    "febrifuge",
    "depurative",
    "emmenagogue",
    "tonic",
    "deodorant",
    "calefacient",
    "refreshing",
    "excretory"
  ],

  medicinalPathogens: [
    "antiseptic",
    "antibiotic",
    "fungicide",
    "anti-viral",
    "insectifuge",
    "anti-allergen",
    "anti-venomous",
    "insecticidal"
  ],

  medicinalDigestive: [
    "stomachic",
    "laxative",
    "anti-parasitic",
    "digestive",
    "diuretic",
    "carminative"
  ],

  medicinalRespiratory: [
    "decongestant",
    "anti-tussive",
    "anti-asthmatic",
    "expectorant"
  ],

  medicinalCirculatory: [
    "astringent",
    "haemostatic",
    "anti-coagulant",
    "cardiotonic",
    "styptic"
  ],

  medicinalNervous: [
    "antispasmodic",
    "relaxant",
    "sedative",
    "analgesic",
    "anaesthetic",
    "anti-depressant"
  ],

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
  plantType: [
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
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "sepember",
    "october",
    "november",
    "december"
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
  ],
  colours: [
    "yellow",
    "orange",
    "red",
    "purple",
    "blue",
    "cyan",
    "greenyellow",
    "green",
    "saddlebrown",
    "black",
    "gray",
    "white"
  ],
  stemTexture: ["smooth", "hairy", "woody", "smooth bark", "rough bark"]
};

temp.medicalProperties = []
  .concat(
    temp.medicinalCirculatory,
    temp.medicinalDigestive,
    temp.medicinalGeneral,
    temp.medicinalNervous,
    temp.medicinalPathogens,
    temp.medicinalRespiratory
  )
  .sort(function(a, b) {
    return a == b ? 0 : a < b ? -1 : 1;
  });

module.exports = temp;
