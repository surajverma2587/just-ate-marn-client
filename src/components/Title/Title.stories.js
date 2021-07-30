import React from "react";

import Title from ".";

export default {
  title: "Components/Atoms/Title",
  component: Title,
};

export const Basic = (props) => <Title {...props} />;

Basic.args = {
  text: "Foo Bar",
};
