import React from "react";
import "./Entry.css";
import { plusIcon, minusIcon } from "../../assets";

const Entry = ({ title, desc, active, setActive, index }) => {
  const handleIconClick = () => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <div className="entry">
      <div className="entry-top slide-in-top" onClick={handleIconClick}>
        <h2>{title}</h2>
        {active === index ? (
          <img
            src={minusIcon}
            alt="accordion-button"
            className="swirl-in-fwd"
          />
        ) : (
          <img src={plusIcon} alt="accordion-button" className="swirl-in-bck" />
        )}
      </div>
      {active === index ? <p className="slide-in-top">{desc}</p> : null}
    </div>
  );
};

export default Entry;
