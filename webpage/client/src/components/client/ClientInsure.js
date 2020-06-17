import React, { Component } from "react";
import { products, insures_init } from "../../utils";
import InsureAccordion from "./insures/InsureAccordion";
import InsureAccordion2 from "./insures/InsureAccordion2";
import InsureAccordion3 from "./insures/InsureAccordion3";
import InsureAccordion4 from "./insures/InsureAccordion4";

class ClientInsure extends Component {
  state = {
    categories: null,
    disabled: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    past: [],
    insures: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categories !== this.props.categories) {
      this.setState({ categories: this.props.categories });
    }
    if (prevState.categories !== this.state.categories) {
      const { categories } = this.props;
      // console.log(categories);
      let d = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      categories.forEach((c, idx) => {
        if (c.員工 === "1") d[0] = 0;
        if (c.雇主責任 === "1") d[1] = 0;
        if (c.產品責任 === "1") d[2] = 0;
        if (c.公共責任 === "1") d[3] = 0;
        if (c["現金(營業現場)"] === "1") d[4] = 0;
        if (c["營業建物(商店、廠房、倉儲)"] === "1") d[5] = 0;
        if (c.電子設備 === "1") d[6] = 0;
        if (c.交通工具 === "1") d[7] = 0;
        if (c.運輸工具 === "1") d[8] = 0;
        if (c.鍋爐 === "1") d[9] = 0;
        if (c["機械（營運過程出現）"] === "1") d[10] = 0;
        if (c.營造 === "1") d[11] = 0;
        if (c.安裝工程 === "1") d[12] = 0;
        if (c.營建機具 === "1") d[13] = 0;
        if (c.海上運輸 === "1") d[14] = 0;
        if (c.教職員 === "1") d[15] = 0;
        if (c["董監事/經理"] === "1") d[16] = 0;
        if (c.旅遊行業 === "1") d[17] = 0;
        if (c["醫師/藥師"] === "1") d[18] = 0;
      });
      // console.log("d", d);
      this.setState({ disabled: d });
      let cats = categories.map((c) => c.營業項目代碼);
      this.getPasts(cats);
    }
    if (prevState.past !== this.state.past) {
      const { past, categories } = this.state;
      let insures = insures_init;
      // Count insures probabilities
      // console.log(past);
      // console.log(insures);
      // console.log(categories[0]);
      let update = (key, string, p_) => {
        products[key].forEach((product) => {
          let obj = insures[string].find((o) => o.name === product);
          if (p_) {
            obj.buy_total += p_[product];
            obj.total += p_.公司總數;
            obj.prob = parseFloat((obj.buy_total / obj.total) * 100).toFixed(2);
          }
        });
      };
      categories.forEach((c) => {
        let p = past.find((o) => o.營業項目代碼 === c.營業項目代碼);
        if (c.員工 === "1") {
          // if (this.state.disabled[0] == 0) {
          update("員工", "worker", p);
        }
        if (c.雇主責任 === "1") {
          // if (this.state.disabled[1] == 0) {
          update("雇主責任", "employ", p);
        }
        if (c.產品責任 === "1") {
          // if (this.state.disabled[2] == 0) {
          update("產品責任", "product", p);
        }
        if (c.公共責任 === "1") {
          // if (this.state.disabled[3] == 0) {
          update("公共責任", "public", p);
        }
        if (c["現金(營業現場)"] === "1") {
          // if (this.state.disabled[4] == 0) {
          update("現金(營業現場)", "money", p);
        }
        if (c["營業建物(商店、廠房、倉儲)"] === "1") {
          // if (this.state.disabled[5] == 0) {
          update("營業建物(商店、廠房、倉儲)", "building", p);
        }
        if (c.電子設備 === "1") {
          // if (this.state.disabled[6] == 0) {
          update("電子設備", "electric", p);
        }
        if (c.交通工具 === "1") {
          // if (this.state.disabled[7] == 0) {
          update("交通工具", "traffic", p);
        }
        if (c.運輸工具 === "1") {
          // if (this.state.disabled[8] == 0) {
          update("運輸工具", "transport", p);
        }
        if (c.鍋爐 === "1") {
          // if (this.state.disabled[9] == 0) {
          update("鍋爐", "boiler", p);
        }
        if (c["機械（營運過程出現）"] === "1") {
          // if (this.state.disabled[10] == 0) {
          update("機械（營運過程出現）", "machine", p);
        }
        if (c.營造 === "1") {
          // if (this.state.disabled[11] == 0) {
          update("營造", "construct", p);
        }
        if (c.安裝工程 === "1") {
          // if (this.state.disabled[12] == 0) {
          update("安裝工程", "install", p);
        }
        if (c.營建機具 === "1") {
          // if (this.state.disabled[13] == 0) {
          update("營建機具", "machinery", p);
        }
        if (c.海上運輸 === "1") {
          // if (this.state.disabled[14] == 0) {
          update("海上運輸", "sea", p);
        }
        if (c.教職員 === "1") {
          // if (this.state.disabled[15] == 0) {
          update("教職員", "faculty", p);
        }
        if (c["董監事/經理"] === "1") {
          // if (this.state.disabled[16] == 0) {
          update("董監事/經理", "supervisor", p);
        }
        if (c.旅遊行業 === "1") {
          // if (this.state.disabled[17] == 0) {
          update("旅遊行業", "tourism", p);
        }
        if (c["醫師/藥師"] === "1") {
          // if (this.state.disabled[18] == 0) {
          update("醫師/藥師", "medicine", p);
        }
      });
      this.setState({ insures: insures });
    }
  }

  getPasts = (cats) => {
    fetch(`/past/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cats: cats,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res:", res.data);
        this.setState({ past: res.data });
      })
      .catch((err) => console.error(err));
  };

  distribute = (arr, obj) => {
    if (obj) {
      let new_obj = {};
      arr.forEach((name) => (new_obj[name] = obj[name]));
      return new_obj;
    } else {
      return null;
    }
  };

  render() {
    const { client, categories } = this.props;
    // console.log("cats:", categories);
    const { disabled, insures } = this.state;
    // const disabled = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1];
    console.log("insures:", insures);
    if (insures)
      return (
        <div className="col col-12 col-sm-6">
          <div class="card mb-3">
            <h5 class="card-header">法人險種需求推薦</h5>
            <InsureAccordion
              disabled={disabled.slice(0, 5)}
              insures={this.distribute(
                ["worker", "employ", "product", "public", "money"],
                insures
              )}
            />
            <hr class="my-1" />
            <InsureAccordion2
              disabled={disabled.slice(5, 9)}
              insures={this.distribute(
                ["building", "electric", "traffic", "transport"],
                insures
              )}
            />
            <hr class="my-1" />
            <InsureAccordion3
              disabled={disabled.slice(9, 14)}
              insures={this.distribute(
                ["boiler", "machine", "construct", "install", "machinery"],
                insures
              )}
            />
            <hr class="my-1" />
            <InsureAccordion4
              disabled={disabled.slice(14, 20)}
              insures={this.distribute(
                ["sea", "faculty", "supervisor", "tourism", "medicine"],
                insures
              )}
            />
          </div>
        </div>
      );
    else {
      return (
        <div className="col col-12 col-sm-6">
          <div class="card mb-3">
            <h5 class="card-header">法人險種需求推薦</h5>
            <div className="card-body">
              <div class="d-flex justify-content-center">
                <div class="spinner-border text-warning" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ClientInsure;

// products.公共責任.forEach((product) => {
//   let obj = insures.public.find((o) => o.name === product);
//   if (p) {
//     obj.buy_total += p[product];
//     obj.total += p.公司總數;
//     obj.prob = parseFloat((obj.buy_total / obj.total) * 100).toFixed(
//       2
//     );
//   }
// });
