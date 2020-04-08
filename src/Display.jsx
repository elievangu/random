import React from "react";
import PropTypes from "prop-types";

const Display = ({ proposition, random }) => {
  const diff = proposition - random;
  console.log(proposition);
  if (proposition.length === 0) {
    return (
      <div>
        <p></p>
      </div>
    );
  } else if (diff < -10) {
    return (
      <div>
        <p>C'est beaucoup plus !</p>
      </div>
    );
     } else if (diff > 12) {
      return (
        <div>
          <p>C'est beaucoup moins</p>
        </div>
      );
    }
   else if (diff === 0) {
    return (
      <div>
        <p>Exact !</p>
      </div>
    );
  } else if (0 < Math.abs(diff) < 6) {
    return (
      <div>
        <p>La réponse est très proche</p>
      </div>
    );
  } 
  else if (6 < Math.abs(diff) < 12) {
    return (
      <div>
        <p>La réponse est proche</p>
      </div>
    );
  } 
};

Display.propTypes = {
  proposition: PropTypes.number.isRequired,
  random: PropTypes.number.isRequired,
};
export default Display;
