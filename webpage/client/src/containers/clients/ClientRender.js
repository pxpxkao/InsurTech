import React, { Component } from "react";
import ClientCard from "../../components/client/ClientCard";
import ClientInsure from "../../components/client/ClientInsure";
// import data from "../../components/client/data";

export default class ClientRender extends Component {
  state = {
    client: null,
    categories: [],
  };
  componentDidMount() {
    console.log("Get client data from database...");
    const { id } = this.props.match.params;
    this.getData(id);
    this.getCats(id);
  }

  getData = (id) => {
    console.log("getData", this.state.client);
    fetch(`/client/${id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ client: res.data[0] }))
      .catch((err) => console.error(err));
  };

  getCats = (id) => {
    fetch(`/client/categories/${id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ categories: res.data }))
      .catch((err) => console.error(err));
  };

  render() {
    const { client, categories } = this.state;
    console.log(categories);
    if (client && categories) {
      return (
        //<div className="container">
        <div className="row">
          <ClientCard client={client} categories={categories} />
          <ClientInsure client={client} categories={categories} />
        </div>
        //</div>
      );
    } else {
      return <div>Did not find the requested client.</div>;
    }
  }
}
