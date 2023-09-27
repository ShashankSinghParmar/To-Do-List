
import React, { useState, useEffect, useCallback } from "react";

import Login from "./MyComponent/Login";
import Register from "./MyComponent/Register";



function App({setID}) {
  let id_pass;
  if (localStorage.getItem("idpass") == null) {
    id_pass = [];
  } else {
    id_pass = JSON.parse(localStorage.getItem("idpass"));
  }

  const [idpass, setIDPass] = useState(id_pass);

  function reg(id_temp, pass_temp) {
    localStorage.setItem(id_temp, pass_temp);
  }

  useEffect(() => {});

  //Login Part

  function login(id_temp, pass_temp) {
    console.log(id_temp);
    let a = localStorage.getItem(id_temp);
    if (a == null) {
      alert("Login Failed");
    } else if (pass_temp != a) {
      alert("Wrong Password");
    } else {
      setID(id_temp);
      alert("Login Successful");
      
    }
  }

  return (
    <div>
      <Register reg={reg} />

      <Login login={login} />
    </div>
  );
}

function ExampleComponent({ID,setID}) {
  return (
    
    <div>
      {ID==null ? App(setID) : <></>}
    </div>
  );
}

export default App;
