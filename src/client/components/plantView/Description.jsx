import React from "react";
import Row from "./Row";
import { toColour } from "../../../utility/utility";

function renderSection(title, arr) {
  return (
    <div className="table-container">
      <div className="row-table">
        <div className="title">{title}</div>
      </div>
      {arr.map((row, index) => (
        <Row
          key={index}
          toRender={row.label === "Colour" ? toColour(row.property) : row.property}
          label={row.label}
          alt={row.alt}
          link={row.link}
        />
      ))}
    </div>
  );
}

function renderGeneral(plant) {
  let arr = [
    {
      property: plant.plantType,
      label: "Type"
    },
    {
      property: plant.evergreen,
      label: "Evergreen"
    },
    {
      property: plant.regions,
      label: "Regions",
      alt: plant.regions.join(", ")
    },
    {
      property: plant.habitat,
      label: "Habitat"
    },
    {
      property: plant.height,
      label: "Height",
      alt: plant.height + " m"
    },
    {
      property: plant.description,
      label: "Description"
    }
  ];
  return renderSection("General", arr);
}

function renderStem(plant) {
  let arr = [
    {
      property: plant.stemColour,
      label: "Colour"
    },
    {
      property: plant.stemTexture,
      label: "Texture"
    },
    {
      property: plant.stemDescription,
      label: "Description"
    }
  ];
  return renderSection("Stem", arr);
}

function renderLeaf(plant) {
  let arr = [
    {
      property: plant.leafShape,
      label: "Shape",
      link: "/leaves/shape/"
    },
    {
      property: plant.leafMargin,
      label: "Margin",
      link: "/leaves/margin/"

    },
    {
      property: plant.leafVenation,
      label: "Venation",
      link: "/leaves/venation/"

    },
    {
      property: plant.leafLength,
      label: "Length",
      alt: plant.leafLength + " cm"
    },
    {
      property: plant.leafArrangement,
      label: "Arrangement",
      link: "/leaves/arrangement/"
    },
    {
      property: plant.leafDescription,
      label: "Description"
    }
  ];
  return renderSection("Leaves", arr);
}

function renderFlowers(plant) {
  if (!plant.flowerColour) return;

  let arr = [
    {
      property: plant.flowerColour,
      label: "Colour"
    },
    {
      property: plant.bloomMonth,
      label: "Blooming Months",
      alt: plant.bloomMonth.join(", ")
    },
    {
      property: plant.flowerDescription,
      label: "Description"
    }
  ];
  return renderSection("Flowers", arr);
}

function renderFruits(plant) {
  if (!plant.fruitColour) return;
  let arr = [
    {
      property: plant.fruitColour,
      label: "Colour"
    },
    {
      property: plant.harvestMonth,
      label: "Colour",
      alt: plant.harvestMonth.join(", ")
    },
    {
      property: plant.fruitDescription,
      label: "Description"
    },
    {
      property: plant.fruitSize,
      label: "Size",
      alt: plant.fruitSize + " cm"
    }
  ];
  return renderSection("Fruits", arr);
}


const Description = props => {
  let plant = props.plant;

  return (
    <React.Fragment>
      {renderGeneral(plant)}
      {renderStem(plant)}
      {renderLeaf(plant)}
      {renderFlowers(plant)}
      {renderFruits(plant)}
    </React.Fragment>
  );
}

export default Description;
