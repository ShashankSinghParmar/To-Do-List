import React, {useState} from 'react'

export default function Login({login}){

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
            login(id,pass);
          
        }
        
    }

  return (
    <div>
      <h3 className="text-center my-3">Login Form</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="id1" value={id} className="form-label">
            ID
          </label>
          <input
            type="text"
            className="form-control"
            id="id1"
            aria-describedby="emailHelp"
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password2" value={pass} className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="Password2"
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
