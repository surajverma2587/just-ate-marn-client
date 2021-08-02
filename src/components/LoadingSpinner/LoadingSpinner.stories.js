import React from "react";

import LoadingSpinner from ".";

export default {
  title: "Components/LoadingSpinner",
  component: LoadingSpinner,
};

export const Default = (props) => <LoadingSpinner {...props} />;
export const Custom = (props) => <LoadingSpinner {...props} />;

Default.args = {
  message: undefined,
};

Custom.args = {
  message: "Keep on spinning",
};
