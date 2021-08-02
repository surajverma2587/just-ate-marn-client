import React from "react";

import MainContainer from ".";

export default {
  title: "Components/Layouts/MainContainer",
  component: MainContainer,
};

export const Basic = (props) => (
  <MainContainer {...props}>
    <div
      style={{
        width: "100%",
        height: "200px",
        textAlign: "center",
        border: "1px solid black",
        margin: "1rem",
      }}
    >
      Box 1
    </div>
  </MainContainer>
);

Basic.args = {};
