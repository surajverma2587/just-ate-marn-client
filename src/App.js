import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Routes from "./Routes";

import "./App.css";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL || "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavigationBar />
        <Routes />
      </Router>
    </ApolloProvider>
  );
};

export default App;
