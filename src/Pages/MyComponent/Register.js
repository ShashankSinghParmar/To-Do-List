import React, { useState } from 'react';

const Register = ({reg}) =>  {

    const [id, setID] = useState("");
    const [pass, setPass] = useState("");

    
    const submit = (e) => {
        e.preventDefault();
        if (id === "") {
            alert("Please Enter the ID");
        }
        else if (pass === "") {
            alert("Please Enter the Password");
            setID("");
        }
        else{
          reg(id,pass);
          
        }
        
    }

  return (
    <div>
      <h3 className="text-center my-3">Registration Form</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="id" value={id} className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            aria-describedby="emailHelp"
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password1" value={pass} className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password1"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Register;