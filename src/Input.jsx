import React from "react";
import PropTypes from "prop-types";

const Input = ({ onSubmit, value }) => {
  return (
    <>
      <form onSubmit={ onSubmit }>
        <label>
            Devinez un nombre entre 1 et 100
          <input type="number" value={value}/>
        </label>
      </form>
    </>
  );
};

Input.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}
export default Input;
