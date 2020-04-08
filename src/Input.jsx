import React from "react";
import PropTypes from "prop-types";

const Input = ({ onSubmit, onChange, value }) => {
  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <label>Devinez un nombre entre 1 et 100</label>
        <input type="number" onChange={e => onChange(e)} value={value} />
      </form>
    </>
  );
};

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number
};
export default Input;
