import React, { Component } from "react";
import * as contentful from "contentful";

export default class index extends Component {
  state = {
    books: []
  };

  client = contentful.createClient({
    space: "ztvkbeux51wi",
    accessToken:
      "158416fa541a39154640e01fe05fc96222f8211e04f8a79efaea6b42d37d3c3c"
  });

  render() {
    return <div />;
  }
}
