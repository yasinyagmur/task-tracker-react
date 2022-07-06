import { TiTrash } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import { useState } from "react";

const ShowTasks = ({ tasks,setTasks}) => {
  const [done, setDone] = useState(true);

  const handleTaskThrough = ((e) => {
    if(done) {
      e.target.classList.add("through");
      setDone(!done)
    }else{
      e.target.classList.remove('through')
      setDone(!done)

    }
  });

  const handleTaskDel=((event)=>{
    setTasks(tasks.filter((item)=>item.id !== event))
  })

  return tasks.map((item) => {
    const { day, task, id } = item;
    return (
      <div className="showContainer" key={id} onClick={handleTaskThrough}>
        <div >
          <p className="taskP">{task}</p>
          <p className="dayP">{day}</p>
        </div>
        <div onClick={()=>handleTaskDel(id)} >
          <TiEdit size="2em"style={{cursor:'pointer'}}/>
          <TiTrash size="2em" style={{cursor:'pointer'}}/>
        </div>
      </div>
    );
  });
};

export default ShowTasks;
