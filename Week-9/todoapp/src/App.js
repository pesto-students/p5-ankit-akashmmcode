import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskInput from "./components/TaskInput/Index";
import TaskItem from "./components/TaskItem/Index";

const data = [
  { id: "1", title: "Hello", notes: "world", completed: false },
  { id: "2", title: "Hello 2", notes: "world", completed: true }
];

function App() {
  const [tasks, setTasks] = useState(data);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [editId, setEditId] = useState("");

  const createTask = (args) => {
    return {
      id: uuidv4(),
      title: args.title,
      notes: args.notes,
      completed: false
    };
  };

  const handleAddTask = () => {
    if (title && notes) {
      const task = createTask({ title, notes });
      const taskData = tasks;
      taskData.push(task);
      setTasks(taskData);
      setTitle("");
      setNotes("");
    }
  };

  const handleDeleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const taskList = tasks;
      taskList.splice(taskIndex, 1);
      setTasks(taskList);
    }
  };

  // const handleCompleteTask = (id) => {
  //   const taskIndex = tasks.findIndex((task) => task.id === id);
  //   if (taskIndex !== -1) {
  //     const taskList = tasks;
  //     taskList[taskIndex].completed = true;
  //     setTasks(taskList);
  //   }
  // };


  const handleCompleteTask = (id) =>{
    setTasks((prev)=>{
      return(
        prev.map((complete)=>{
          return complete.id === id? {...complete, completed:true}:complete
        })
      )
    })
  }


  const handleEditTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const task = tasks[taskIndex];
      setTitle(task.title);
      setNotes(task.notes);
      setEditId(id);
    }
  };

  const submitEditTask = () => {
    const taskIndex = tasks.findIndex((task) => task.id === editId);
    if (taskIndex !== -1) {
      const taskList = tasks;
      taskList[taskIndex].title = title;
      taskList[taskIndex].notes = notes;
      setTasks(taskList);
      setTitle("");
      setNotes("");
      setEditId("");
    }
  };

  const pendingTasks = tasks.filter((item) => !item.completed);
  const completedTasks = tasks.filter((item) => item.completed);

  return (
    <div>
      <TaskInput
        title={title}
        notes={notes}
        onTitleChange={(e) => setTitle(e.target.value)}
        onNotesChange={(e) => setNotes(e.target.value)}
        onTaskSubmit={editId ? submitEditTask : handleAddTask}
        onTaskEdit={handleEditTask}
        buttonText={editId ? "Update Task" : "Add Task"}
      />

      {pendingTasks.map((item) => {
        return (
          <TaskItem
            key={item.key}
            title={item.title}
            notes={item.notes}
            completed={item.completed}
            onCompleteClick={() => handleCompleteTask(item.id)}
            onEditClick={() => handleEditTask(item.id)}
            onDeleteClick={() => handleDeleteTask(item.id)}
          />
        );
      })}
      <hr />
      <h4>Completed</h4>
      {completedTasks.map((item) => {
        return (
          <TaskItem
            key={item.key}
            title={item.title}
            notes={item.notes}
            completed={item.completed}
            onDeleteClick={() => handleDeleteTask(item.id)}
          />
        );
      })}
    </div>
  );
}

export default App;
