let a = {
  classification: {
    latin: "Salvia Officinalis",
    common: "Sage",
    type: "herbaceous plant",
    //loses leaves
    evergreen: false
  },
  appearance: {
    //m
    height: 0.6,
    stem: "gray when young, ruguous when old",
    leaves: {
      shape: "oblong",
      description: "rugose, green on top, hairy and white on the underside",
      margin: "rugged",
      //cm, average
      length: 2.5
    },
    //can be null
    flowers: {
      colour: "violet",
      description: "...",
      bloomSeason: "...."
    },

    //can be null
    fruit: {
      colour: "",
      description: "",
      size: ""
    }
  },

  //both can be null
  uses: [
    {
      part: "leaves",
      edible: "eat raw",
      medicinal: {
        properties: ["tonic", "good"],
        preparation: "apply on wound"
      },
      material: {
        use: "cordage",
        notes: "let leaves dry out, split fibers."
      }
    },
    {
      part: "root",
      edible: null,
      medicinal: null,
      material: {
        use: "firemaking",
        notes: null
      }
    }
  ],

  images: [
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/I/91ZTowZnVSL._SX425_.jpg",
      caption: "An overall view of the sage plant"
    },
    {
      url:
        "https://erboristeriadurga.it/wp-content/uploads/2014/06/salvia-officinalis.jpg",
      caption: "A detail view of the sage leaves"
    },
    {
      url:
        "https://previews.123rf.com/images/splinex/splinex1706/splinex170600016/81490038-salvia-officinalis-sage-also-called-garden-sage-or-common-sage-flower-isolated-.jpg",
      caption: "A detail on the flowers of sage"
    }
  ]
};
