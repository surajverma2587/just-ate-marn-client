import React from "react";
import { ApolloProvider } from "@apollo/client";

import LoginForm from ".";
import UserProvider from "../../context/UserContext";

export default {
  title: "Components/Forms/LoginForm",
  component: LoginForm,
};

export const Basic = (props) => (
  <ApolloProvider client={{}}>
    <UserProvider>
      <LoginForm {...props} />
    </UserProvider>
  </ApolloProvider>
);

Basic.args = {
  redirect: undefined,
};
