import * as React from "react";
import { render } from "react-dom";
import { createClient, Provider } from "urql";
import { Repositories } from "./Repositories";

const client = createClient({
  url: "https://api.github.com/graphql",
  fetchOptions: {
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`
    }
  }
});

const App = () => (
  <Provider value={client}>
    <Repositories />
  </Provider>
);

render(<App />, document.getElementById("app"));
