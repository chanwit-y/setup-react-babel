import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  console.lo1g("Hello webpack!");
  const [state, setState] = useState("CLICK ME");

  const onTest = () => {
    console.log('test');
  }

  const onTest3 = () => {
    console.log('test');
  }

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
