import React from "react";
import ReactDom from "react-dom";

const title = 'Test'

ReactDom.render(<div>{title}</div>, document.getElementById("root"));

module.hot.acceph();