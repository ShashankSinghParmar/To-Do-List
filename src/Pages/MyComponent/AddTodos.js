import React, { useState } from 'react';

const AddTodos = ({addTodos}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [pri, setPri] = useState(0);

    const submit = (e) => {
        e.preventDefault();
        if (title === "") {
            alert("Title");
        }
        else if (desc === "") {
            alert("Description");
            setTitle("");
        }
        else if (pri === 0) {
          alert("Priority");
          setTitle("");
      }
        else{
            addTodos(title,desc, pri);
            // console.log(addTodos)
        }
        
    }

  return (
    <div>
        <h3 className="text-center my-3">Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" value={title} className="form-label"  >
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={(e)=>setTitle(e.target.value)}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="desc" value={desc} className="form-label" >
            Description
          </label>
          <input
            type="  "
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pri" value={desc} className="form-label" >
            Priority
          </label>
          <input
            type="number"
            className="form-control"
            id="pri"
            onChange={(e)=>setPri(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodos;
