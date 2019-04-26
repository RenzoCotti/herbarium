import React from "react";

const Footbar = props => {
  let today = new Date().getFullYear();
  return (
    <div className="foot">
      <div className="sub-title">&copy; {today} Renzo Cotti</div>
      <div className="foot-note">All images used under fair use. The information reported here shouldn't be taken as medical advice.</div>
    </div>);
};

export default Footbar;
