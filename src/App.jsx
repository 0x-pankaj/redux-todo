import React, { useState } from "react";

import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/addTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1> Redux project</h1>
        <AddTodo /> 
        <Todos /> 
      </div>
    </>
  );
}

export default App;
