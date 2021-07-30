import { useState } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import UserProvider from "./context/UserContext";
import NavigationBar from "./components/NavigationBar";

import "./App.css";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL || "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const App = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const onLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setCurrentUser(user);
  };

  const onLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser();
  };

  return (
    <ApolloProvider client={client}>
      <UserProvider
        currentUser={currentUser}
        onLogin={onLogin}
        onLogout={onLogout}
      >
        <Router>
          <NavigationBar />
          <Routes />
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
};

export default App;
