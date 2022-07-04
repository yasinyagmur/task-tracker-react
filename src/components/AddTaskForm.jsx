import { useState } from "react";
const AddTaskForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newTask = { id: id, task: task, day: day, isDone: false };
    setTasks([...tasks, newTask]);
    setTask("");
    setDay("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="day">Task</label>
        <input
          type="date"
          name="day"
          id="task"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
        />
      </div>
      <div>
        <button className="btn btn-submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
