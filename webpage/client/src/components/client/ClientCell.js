import React, { Component } from "react";
import { colors } from "../../utils";

export default class ClientCell extends Component {
  cat_badges = (cat) => {
    let badges = cat.map((c, idx) => (
      <span
        className={`mr-1 badge badge-pill badge-${colors[idx % colors.length]}`}
        style={{ fontSize: "13px" }}
      >
        {c}
      </span>
    ));
    return badges;
  };
  render() {
    let { client } = this.props;
    return (
      <tr class="table-secondary">
        <th scope="row">{client.location}</th>
        <td>
          <a href={"/client/" + client.idx}>{client.name}</a>
        </td>
        <td>{client.date}</td>
        <td width="350px">{this.cat_badges(client.industry)}</td>
      </tr>
    );
  }
}
