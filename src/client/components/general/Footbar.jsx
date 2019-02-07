import React from "react";

const Footbar = props => {
  let today = new Date().getFullYear();
  return <div className="foot sub-title">&copy; {today} Renzo Cotti</div>;
};

export default Footbar;
