import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../components/client/data";

export class Homepage extends Component {
  render() {
    const north = data.cities.filter((c) => c.dist === "北區");
    const south = data.cities.filter((c) => c.dist === "南區");
    const central = data.cities.filter((c) => c.dist === "中區");
    const east = data.cities.filter((c) => c.dist === "東區");
    return (
      <div className="container">
        <h3 className="mt-2 mb-4 text-center">北區</h3>
        <div className="row text-center">
          {north.map((c) => (
            <h4 className="col-3">
              <Link to={`/location/${c.id}`}>{c.name}</Link>
            </h4>
          ))}
        </div>
        <h3 className="mt-2 mb-4 text-center">中區</h3>
        <div className="row text-center">
          {central.map((c) => (
            <h4 className="col-3">
              <Link to={`/location/${c.id}`}>{c.name}</Link>
            </h4>
          ))}
        </div>
        <h3 className="mt-2 mb-4 text-center">南區</h3>
        <div className="row text-center">
          {south.map((c) => (
            <h4 className="col-3">
              <Link to={`/location/${c.id}`}>{c.name}</Link>
            </h4>
          ))}
        </div>
        <h3 className="mt-2 mb-4  text-center">東區</h3>
        <div className="row text-center">
          {east.map((c) => (
            <h4 className="col-3">
              <Link to={`/location/${c.id}`}>{c.name}</Link>
            </h4>
          ))}
        </div>
      </div>
    );
  }
}

export default Homepage;
/*
<hr />
<div className="jumbotron">
  <h1 className="display-3">Location</h1>
  <h3 className="lead">Data of Potential Clients</h3>
</div>
*/
