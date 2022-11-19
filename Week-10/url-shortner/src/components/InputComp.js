import { PropTypes } from "prop-types";
import React from "react";
import "./InputComp.css";

function InputComp(props) {
  return (
    <>
      <div className="split right">
        <div className="App">
          <div className="right-text">
            <h1 className="right-text">LET's SHORT SOME URL's</h1>
          </div>
          <input
            className={!props.validated ? "error" : ""}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onInputValue}
            type="text"
          ></input>
          <button onClick={props.onsubmit}>
            <b>SUBMIT</b>
          </button>
          {!props.validated && (
            <div className="error-text">{props.validationText}</div>
          )}
          {props.loaderstatus === "true" ? (
            <p>Loading...</p>
          ) : (
            <p>{props.resultstatus}</p>
          )}
        </div>
      </div>
    </>
  );
}

InputComp.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  validated: PropTypes.bool,
  validationText: PropTypes.string
};

export default InputComp;
