import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { render } from "enzyme";


const rootElement = document.getElementById('root');

// Render the App component on the root DOM node
ReactDOM.render(<App />, rootElement);