import React, { Component } from "react";
import ClientCell from "../../components/client/ClientCell";
import data from "../../components/client/data";

class ClientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: data.cities[parseInt(this.props.match.params.id) - 1].name,
      loc_id: "",
      date_id: "",
      cat_id: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.options[e.target.selectedIndex].value,
    });
  };

  onSelect = (clients) => {
    let { loc_id, date_id, cat_id } = this.state;
    let ret = clients;
    if (loc_id !== "") {
      ret = ret.filter((c) => c.location === loc_id);
    }
    if (date_id !== "") {
      ret = ret.filter((c) => c.date.substr(0, 5) === date_id);
    }
    if (cat_id !== "") {
      ret = ret.filter((c) => {
        let flag = 0;
        c.industry.forEach((c_) => {
          if (c_ == cat_id) {
            flag = 1;
          }
        });
        if (flag === 1) {
          return true;
        }
      });
    }
    return ret;
  };

  options = (dict) => {
    return dict.map((d) => {
      return <option value={d}>{d}</option>;
    });
  };

  render() {
    // console.log(this.state);
    let clients = data.clients.filter((c) => c.city === this.state.city);
    let select_clients = this.onSelect(clients);
    let date = ["10903", "10902", "10901", "10812", "10811"];
    let locs = ["東區", "西區", "楠梓區"];
    let cats = [
      "未分類其他資訊服務",
      "其他未分類電子零組件製造",
      "其他電子、通訊設備及其零組件批發",
      "其他化學原材料及其製品批發",
      "未分類其他技術檢測及分析服務",
    ];

    return (
      <div className="container">
        <div className="row">
          <legend className="col">Select</legend>
          <div class="form-group col">
            <select
              class="custom-select"
              name="loc_id"
              onChange={this.onChange}
            >
              <option value="">所有地區</option>
              {this.options(locs)}
            </select>
          </div>
          <div class="form-group col">
            <select
              class="custom-select"
              name="date_id"
              onChange={this.onChange}
            >
              <option value="">所有成立時間</option>
              {this.options(date)}
            </select>
          </div>
          <div class="form-group col">
            <select
              class="custom-select"
              name="cat_id"
              onChange={this.onChange}
            >
              <option value="">所有產業別</option>
              {this.options(cats)}
            </select>
          </div>
        </div>
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">地區</th>
              <th scope="col">公司名稱</th>
              <th scope="col">成立時間</th>
              <th scope="col">產業別</th>
            </tr>
          </thead>
          <tbody>
            {select_clients.map((client) => (
              <ClientCell client={client} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClientTable;
