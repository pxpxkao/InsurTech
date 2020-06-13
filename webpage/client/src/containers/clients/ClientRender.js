import React, { Component } from "react";
import ClientCard from "../../components/client/ClientCard";
import ClientInsure from "../../components/client/ClientInsure";
import data from "../../components/client/data";

export default class ClientRender extends Component {
  state = {
    client: {},
  };
  componentDidMount() {
    console.log("Get client data from database...");
  }
  render() {
    const { id } = this.props.match.params;
    const client = data.clients[id];
    console.log(client);
    if (client !== undefined) {
      return (
        //<div className="container">
        <div className="row">
          <ClientCard client={client} />
          <ClientInsure client={client} />
        </div>
        //</div>
      );
    } else {
      return <div>Did not find the requested client.</div>;
    }
  }
}
