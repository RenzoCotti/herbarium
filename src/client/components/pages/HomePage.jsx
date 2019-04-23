import React from "react";
import leaf from "../../../../public/images/leaf.png"

const HomePage = props => {
  return (
    <React.Fragment>
      <div className="home-container">
        <div className="home">Herbarium</div>
        <img src={leaf} className="leaf-home" />
      </div>
    </React.Fragment>
  );
};
export default HomePage;
