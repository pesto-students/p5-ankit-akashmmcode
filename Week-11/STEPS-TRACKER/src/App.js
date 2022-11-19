import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { add, reset } from "./redux/actions/StepAction";
import "./App.css";
import "./styles.css";
// import StepsTracker from "./component/StepsTracker";
// import { Provider } from "react-redux";

function App(props) {
  // <StepsTracker />
  return (
    <>
      <div className="outer-div">
        <h1>You've walked {props.steps} step's today!</h1>
        <div className="addstep">
          <button onClick={props.add}>
            <b>ADD A STEP</b>
          </button>
        </div>
        <div className="substep">
          <button onClick={props.reset}>
            <b>RESET STEP</b>
          </button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    steps: state.steps
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ add, reset }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
