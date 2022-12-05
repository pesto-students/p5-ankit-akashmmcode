import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleLights } from "./redux/actions/roomActions";
import "./App.css";

function App(props) {
  return (
    <div
      className={
        props.room.lights === "on"
          ? "light-mode"
          : props.room.lights === "off"
          ? "dark-mode"
          : ""
      }
    >
      <h1>The Light is {props.room.lights}</h1>
      <button
        onClick={() =>
          props.toggleLights(props.room.lights === "on" ? "off" : "on")
        }
      >
        On/Off
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    room: state.room
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleLights }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
