import * as React from "react";
import { render } from "react-dom";
import { createClient, Provider } from "urql";
import { App } from "./App";

const client = createClient({
  url: "https://api.github.com/graphql",
  fetchOptions: {
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`
    }
  }
});

render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("app")
);
