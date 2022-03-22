import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

var openModal = document.querySelector("#open-modal-btn");
openModal.click();
openModal.style.display = "none";

