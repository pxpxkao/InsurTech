import React, { Component } from "react";
import ClientCell from "../../components/client/ClientCell";
// import data from "../../components/client/data";
import { cities, date } from "../../utils";

class ClientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: cities[parseInt(this.props.match.params.id) - 1].name,
      loc_id: "",
      date_id: "",
      cat_id: "",
      clients: [],
      locations: [],
      loading: true,
      industries: [],
    };
  }

  componentDidMount() {
    this.getClients(this.state.city);
    this.getLoc(this.state.city);
  }
  getClients = (city_name) => {
    fetch(`/clients/${city_name}`)
      .then((res) => res.json())
      .then((res) => {
        let industries = [];
        for (let c of res.data) {
          let cats = JSON.parse(JSON.parse(c.行業分類));
          if (cats) {
            for (let [key, value] of Object.entries(cats)) {
              if (!industries.includes(value)) industries.push(value);
            }
          }
        }
        industries.sort();
        this.setState({
          clients: res.data.filter((c) => JSON.parse(c.行業分類) !== "null"),
          loading: false,
          industries: industries,
        });
      })
      .catch((err) => console.error(err));
  };
  getLoc = (city_name) => {
    fetch(`/locations/${city_name}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ locations: res.data.map((loc) => loc.區域) })
      )
      .catch((err) => console.error(err));
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.options[e.target.selectedIndex].value,
    });
  };

  onSelect = (clients) => {
    let { loc_id, date_id, cat_id } = this.state;
    let ret = clients;
    if (loc_id !== "") {
      ret = ret.filter((c) => c.區域 === loc_id);
    }
    if (date_id !== "") {
      ret = ret.filter((c) => c.核准設立日期.substr(0, 7) === date_id);
    }
    if (cat_id !== "") {
      ret = ret.filter((c) => {
        let flag = 0;
        let c_industries = JSON.parse(JSON.parse(c.行業分類));
        Object.keys(c_industries).forEach((c_) => {
          if (c_industries[c_] === cat_id) {
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
    return dict.map((d, idx) => {
      return (
        <option value={d} key={idx}>
          {d}
        </option>
      );
    });
  };

  render() {
    // console.log(this.state);
    const { clients, locations, loading, industries } = this.state;
    // console.log(industries);
    let select_clients = this.onSelect(clients);

    if (!loading) {
      return (
        <div className="container">
          <div className="row">
            <legend className="col">Select</legend>
            <div className="form-group col">
              <select
                className="custom-select"
                name="loc_id"
                onChange={this.onChange}
              >
                <option value="">所有地區</option>
                {this.options(locations)}
              </select>
            </div>
            <div className="form-group col">
              <select
                className="custom-select"
                name="date_id"
                onChange={this.onChange}
              >
                <option value="">所有核准設立時間</option>
                {this.options(date)}
              </select>
            </div>
            <div className="form-group col">
              <select
                className="custom-select"
                name="cat_id"
                onChange={this.onChange}
              >
                <option value="">所有行業別</option>
                {this.options(industries)}
              </select>
            </div>
          </div>
          <table className="table table-hover text-center">
            <thead>
              <tr>
                <th scope="col">地區</th>
                <th scope="col">公司名稱</th>
                <th scope="col">核准設立時間</th>
                <th scope="col">行業別</th>
              </tr>
            </thead>
            <tbody>
              {select_clients.map((client) => (
                <ClientCell client={client} key={client.統一編號} />
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="text-center text-primary">
            <strong style={{ fontSize: "22px" }}>Loading... </strong>
            <div
              className="spinner-border ml-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      );
    }
  }
}

export default ClientTable;
