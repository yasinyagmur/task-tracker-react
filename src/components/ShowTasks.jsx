import { TiTrash } from "react-icons/ti";
import { useState } from "react";

const ShowTasks = ({ tasks }) => {
  const [done, setDone] = useState(true);

  const handleTaskClick = ((e) => {
    if(done) {
      e.target.classList.add("through");
      setDone(!done)
    }else{
      e.target.classList.remove('through')
      setDone(!done)

    }
  });

  return tasks.map((item) => {
    const { day, task, id } = item;
    return (
      <div className="showContainer" key={id} onClick={handleTaskClick}>
        <div >
          <p className="taskP">{task}</p>
          <p className="dayP">{day}</p>
        </div>
        <div>
          <TiTrash size="2em" />
        </div>
      </div>
    );
  });
};

export default ShowTasks;
