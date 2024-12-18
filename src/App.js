import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
function App() {
  const [show, setShow] = useState(false);
  // console.log(show);
  return (
    <div className="App">
      <h1>WS HOOKS</h1>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <Counter />}
    </div>
  );
}

export default App;
