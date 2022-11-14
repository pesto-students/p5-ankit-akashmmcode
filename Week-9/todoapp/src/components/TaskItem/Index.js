import PropTypes from "prop-types";
import "./styles.css";

const TaskItem = (props) => {
  return (
    <div className={`card-container ${props.completed ? "completed" : ""}`}>
      <div className="task-heading">
        <h1>{props.title}</h1>
      </div>
      <p className="task-desc">{props.notes}</p>
      {props.onCompleteClick && (
        <button className="complete" onClick={props.onCompleteClick}>
          Complete
        </button>
      )}
      {props.onEditClick && (
        <button className="edit" onClick={props.onEditClick}>
          Edit
        </button>
      )}
      {props.onDeleteClick && (
        <button className="delete" onClick={props.onDeleteClick}>
          Delete
        </button>
      )}
    </div>
  );
};

TaskItem.propTypes = {
  title: PropTypes.string,
  notes: PropTypes.string,
  completed: PropTypes.bool,
  onCompleteClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func
};

export default TaskItem;
