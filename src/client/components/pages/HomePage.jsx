import React from "react";
import leaf from "../../../../public/images/leaf.png"

const HomePage = props => {
  return (
    <React.Fragment>
      <img src={leaf} className="leaf-home" />
      <div className="home">Herbarium</div>
    </React.Fragment>
  );
};
export default HomePage;
