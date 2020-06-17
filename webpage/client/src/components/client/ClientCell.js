import React, { Component } from "react";
import { colors } from "../../utils";

export default class ClientCell extends Component {
  badges = (cat) => {
    if (cat === "null") console.log(cat);
    cat = JSON.parse(JSON.parse(cat));
    let new_cat = [];
    for (let [key, value] of Object.entries(cat)) {
      // console.log(key, value);
      new_cat.push(value);
    }
    // console.log(new_cat);
    let badges = new_cat.map((c, idx) => (
      <span
        className={`mr-1 badge badge-pill badge-${colors[idx % colors.length]}`}
        style={{ fontSize: "13px" }}
        key={idx}
      >
        {c}
      </span>
    ));
    return badges;
  };
  render() {
    let { client } = this.props;
    return (
      <tr className="table-secondary">
        <th scope="row">{client.區域}</th>
        <td>
          <a href={"/clientinfo/" + client.統一編號}>{client.公司名稱}</a>
        </td>
        <td>{client.核准設立日期.slice(0, 10)}</td>
        <td width="350px">{this.badges(client.行業分類)}</td>
      </tr>
    );
  }
}
