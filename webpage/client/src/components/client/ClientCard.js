import React, { Component } from "react";
import { colors } from "../../utils";

class ClientCard extends Component {
  badges = (cat) => {
    cat = JSON.parse(JSON.parse(cat));
    let new_cat = [];
    for (let [key, value] of Object.entries(cat)) {
      new_cat.push(value);
    }
    let badges = new_cat.map((c, idx) => (
      <span
        className={`mr-1 badge badge-pill badge-${colors[idx % colors.length]}`}
        style={{ fontSize: "12px" }}
      >
        {c}
      </span>
    ));
    return badges;
  };

  cat_badges = (cat) => {
    let badges = cat.map((c, idx) => (
      <span
        className={`mr-1 badge badge-pill badge-${colors[idx % colors.length]}`}
        style={{ fontSize: "12px" }}
      >
        {c.營業項目名稱}
      </span>
    ));
    return badges;
  };

  render() {
    const { client, categories } = this.props;
    return (
      <div className="col col-12 col-sm-6">
        <div class="card mb-3">
          <h3 class="card-header">{client.公司名稱}</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">統一編號：{client.統一編號}</li>
            <li class="list-group-item">代表人：{client.代表人}</li>
            <li class="list-group-item">地址：{client.公司所在地}</li>
            <li class="list-group-item">資本額：{client.資本額}</li>
            <li class="list-group-item">
              行業別：{this.badges(client.行業分類)}
            </li>
            <li class="list-group-item">
              所營事業項目：{this.cat_badges(categories)}
            </li>
            <li class="list-group-item">
              最近之通訊處：{client.最近之通訊處} | 次近之通訊處：
              {client.次近之通訊處}
            </li>
          </ul>
          <div class="card-body">
            <a
              href={`https://www.google.com.tw/maps/?q=${client.公司所在地}`}
              class="card-link"
              target="_blank"
            >
              Google map
            </a>
          </div>
          <div class="card-footer text-muted text-right">
            核准設立日期：{client.核准設立日期.slice(0, 10)}
          </div>
        </div>
      </div>
    );
  }
}

export default ClientCard;
