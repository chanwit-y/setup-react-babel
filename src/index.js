import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  console.log("Hello webpack!");
  const [state, setState] = useState("CLICK ME");

  return (
    <button
      onClick={() => {
        setState("CLICKED");
        console.log("Hello webpack!");
      }}
    >
      {state}
    </button>
  );
}

render(<App />, document.getElementById("root"));
