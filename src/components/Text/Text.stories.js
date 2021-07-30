import React from "react";
import { FaHome } from "react-icons/fa";

import Text from ".";

export default {
  title: "Components/Atoms/Text",
  component: Text,
};

export const Basic = (props) => <Text {...props} />;
export const Small = (props) => <Text {...props} />;
export const WithIconBasic = (props) => <Text {...props} />;
export const WithIconSmall = (props) => <Text {...props} />;

Basic.args = {
  body:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

Small.args = {
  body: "123, Some Street, Somewhere, GB1 2XX",
  size: "small",
};

WithIconBasic.args = {
  body: "123, Some Street, Somewhere, GB1 2XX",
  icon: FaHome(),
};

WithIconSmall.args = {
  body: "123, Some Street, Somewhere, GB1 2XX",
  size: "small",
  icon: FaHome(),
};
