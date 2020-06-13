import React, { Component } from "react";
import { colors } from "../../utils";

class ClientCard extends Component {
  cat_badges = (cat) => {
    let badges = cat.map((c, idx) => (
      <span
        className={`mr-1 badge badge-pill badge-${colors[idx % colors.length]}`}
        style={{ fontSize: "12px" }}
      >
        {c}
      </span>
    ));
    return badges;
  };

  render() {
    const { client } = this.props;
    return (
      <div className="col col-12 col-sm-6">
        <div class="card mb-3">
          <h3 class="card-header">{client.name}</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">統一編號：{client.number}</li>
            <li class="list-group-item">代表人：{client.people}</li>
            <li class="list-group-item">地址：{client.address}</li>
            <li class="list-group-item">資本額：{client.capital}</li>
            <li class="list-group-item">
              產業別：{this.cat_badges(client.industry)}
            </li>
            <li class="list-group-item">
              所營事業項目：{this.cat_badges(client.category)}
            </li>
            <li class="list-group-item">
              最近之通訊處：{client.nearest} | 次近之通訊處：
              {client.sec_nearest}
            </li>
          </ul>
          <div class="card-body">
            <a
              href={`https://www.google.com.tw/maps/?q=${client.address}`}
              class="card-link"
              target="_blank"
            >
              Google map
            </a>
          </div>
          <div class="card-footer text-muted text-right">
            核准日期：{client.date}
          </div>
        </div>
      </div>
    );
  }
}

export default ClientCard;
