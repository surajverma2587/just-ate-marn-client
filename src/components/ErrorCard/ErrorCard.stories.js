import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorCard from ".";

export default {
  title: "Components/Cards/ErrorCard",
  component: ErrorCard,
};

export const Default = (props) => <ErrorCard {...props} />;
export const Custom = (props) => <ErrorCard {...props} />;
export const GoBack = (props) => (
  <Router>
    <ErrorCard {...props} />
  </Router>
);

Default.args = {
  title: undefined,
  message: undefined,
};

Custom.args = {
  headerTitle: "Oops",
  title: "Some title",
  message: "A brief message...",
};

GoBack.args = {
  headerTitle: "Oops",
  title: "Some title",
  message: "A brief message...",
  goBack: true,
};
