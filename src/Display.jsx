import React from "react";
import PropTypes from "prop-types";

const Display = ({ value, random }) => {
  switch (value) {
    case value > random:
      return (
        <div>
          <p>C'est beaucoup moins !</p>
        </div>
      );
    case value < random:
      return (
        <div>
          <p>C'est beaucoup plus !</p>
        </div>
      );
    case value === random:
      return (
        <div>
          <p>Exact !</p>
        </div>
      );
    default:
      return (
        <div>
          <p>Exact !</p>
        </div>
      );
  }
};

Display.propTypes = {
  value: PropTypes.number.isRequired,
  random: PropTypes.number.isRequired,
};
export default Display;
