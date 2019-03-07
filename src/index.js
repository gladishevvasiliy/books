import React from "react";
import ReactDOM from "react-dom";
import * as contentful from "contentful";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const client = contentful.createClient({
  space: "ztvkbeux51wi",
  accessToken:
    "158416fa541a39154640e01fe05fc96222f8211e04f8a79efaea6b42d37d3c3c"
});

client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if (entry.fields) {
      console.log(entry.fields);
    }
  });
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
