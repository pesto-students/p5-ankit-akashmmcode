import PropTypes from "prop-types";
import "./styles.css";

const TaskInput = (props) => {
  console.log(props);
  return (
    <div className="input-container">
      <div className="header">
        <h3>To-do</h3>
      </div>
      <input
        placeholder="Enter Title"
        value={props.title}
        onChange={props.onTitleChange}
      />
      <textarea
        placeholder="Enter Notes"
        value={props.notes}
        onChange={props.onNotesChange}
      ></textarea>

      <button onClick={props.onTaskSubmit} className="addButton">
        <b>{props.buttonText || "Submit"}</b>
      </button>
    </div>
  );
};

TaskInput.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onNotesChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  notes: PropTypes.string,
  onTaskSubmit: PropTypes.func,
  buttonText: PropTypes.string
};

export default TaskInput;
