import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faPhoneSquareAlt,
  faEnvelopeSquare,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

library.add(fas, faPhoneSquareAlt, faEnvelopeSquare, faClock);

ReactDOM.render(<App />, document.getElementById("root"));
