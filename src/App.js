// import logo from "./logo.svg";
import "./App.css";
import React, { useState} from "react";

import Work from "./Pages/Work"
import Start from "./Pages/Start"



function App() {

  const [id, setID] = useState(false);

  return (
    <div>
      {id==false && <Start setID={setID}/>}
      {id && <Work ID={id} setID={setID} />}
    </div>
  );
}

export default App;
