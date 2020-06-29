import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";



// Create apollo client
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

var hist = createBrowserHistory();

// Create Apollo client
const client = new ApolloClient({
  uri: 'https://mobilefood.herokuapp.com/',
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
