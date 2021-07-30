import React from "react";

import FlexContainer from ".";

export default {
  title: "Components/Layouts/FlexContainer",
  component: FlexContainer,
};

export const Basic = (props) => (
  <FlexContainer {...props}>
    <div style={{ width: "200px", border: "1px solid black", margin: "1rem" }}>
      Box 1
    </div>
    <div style={{ width: "200px", border: "1px solid black", margin: "1rem" }}>
      Box 2
    </div>
    <div style={{ width: "200px", border: "1px solid black", margin: "1rem" }}>
      Box 3
    </div>
    <div style={{ width: "200px", border: "1px solid black", margin: "1rem" }}>
      Box 4
    </div>
    <div style={{ width: "200px", border: "1px solid black", margin: "1rem" }}>
      Box 5
    </div>
    <div style={{ width: "200px", border: "1px solid black", margin: "1rem" }}>
      Box 6
    </div>
    <div style={{ width: "200px", border: "1px solid black", margin: "1rem" }}>
      Box 7
    </div>
  </FlexContainer>
);

Basic.args = {};
