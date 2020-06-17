import React, { Component } from "react";
import InsureList from "./InsureList";

// let all_name = ["員工", "雇主責任", "產品責任", "公共責任", "現金", "營業建物", "電子設備", "交通工具", "運輸工具", "鍋爐", "機械", "營造", "安裝工程", "營建機具", "海上運輸", "教職員", "董監事/經理", "旅遊行業", "醫師/藥師"];

// let name = ["員工", "雇主責任", "產品責任", "公共責任", "現金"];

class InsureAccordion extends Component {
  render() {
    let { disabled, insures } = this.props;
    let colors = ["primary", "success", "warning", "info", "dark", "secondary"];
    let btn_colors = disabled.map((d, idx) => {
      if (d === 1) return colors[5];
      return colors[idx];
    });
    // if (insures === null) return <div>Loading...</div>;
    return (
      <div class="accordion mt-2 mb-1" id="accordion1">
        <button
          class={`btn btn-sm btn-outline-${btn_colors[0]} ml-4`}
          id="worker"
          type="button"
          data-toggle="collapse"
          data-target="#collapseWorker"
          aria-expanded="false"
          aria-controls="collapseWorker"
          disabled={disabled[0]}
        >
          員工
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[1]} ml-2`}
          id="employ"
          data-toggle="collapse"
          data-target="#collapseEmploy"
          aria-expanded="false"
          aria-controls="collapseEmploy"
          disabled={disabled[1]}
        >
          雇主責任
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[2]} ml-2`}
          id="product"
          data-toggle="collapse"
          data-target="#collapseProduct"
          aria-expanded="false"
          aria-controls="collapseProduct"
          disabled={disabled[2]}
        >
          產品責任
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[3]} ml-2`}
          id="public"
          data-toggle="collapse"
          data-target="#collapsePublic"
          aria-expanded="false"
          aria-controls="collapsePublic"
          disabled={disabled[3]}
        >
          公共責任
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[4]} ml-2`}
          id="money"
          data-toggle="collapse"
          data-target="#collapseMoney"
          aria-expanded="false"
          aria-controls="collapseMoney"
          disabled={disabled[4]}
        >
          現金
        </button>

        <div
          id="collapseWorker"
          class="collapse"
          aria-labelledby="worker"
          data-parent="#accordion1"
        >
          <InsureList insures={insures.worker} color="0" />
        </div>
        <div
          id="collapseEmploy"
          class="collapse"
          aria-labelledby="employ"
          data-parent="#accordion1"
        >
          <InsureList insures={insures.employ} color="1" />
        </div>
        <div
          id="collapseProduct"
          class="collapse"
          aria-labelledby="product"
          data-parent="#accordion1"
        >
          <InsureList insures={insures.product} color="2" />
        </div>
        <div
          id="collapsePublic"
          class="collapse"
          aria-labelledby="public"
          data-parent="#accordion1"
        >
          <InsureList insures={insures.public} color="3" />
        </div>
        <div
          id="collapseMoney"
          class="collapse"
          aria-labelledby="money"
          data-parent="#accordion1"
        >
          <InsureList insures={insures.money} color="4" />
        </div>
      </div>
    );
  }
}

export default InsureAccordion;

// let insures = {
//   worker: [
//     { name: "人事保證保險", prob: 80 },
//     { name: "員工誠實保證保險", prob: 90 },
//     { name: "團體傷害保險", prob: 75 },
//     { name: "團體職業災害補償保險", prob: 78 },
//     { name: "團體健康保險-福氣安康專案", prob: 65 },
//     { name: "員工健康保險-世紀安康專案", prob: 70 },
//   ],
//   employ: [
//     { name: "僱主補償契約責任保險", prob: 80 },
//     { name: "僱主意外責任保險", prob: 90 },
//   ],
//   product: [{ name: "產品責任保險", prob: 90 }],
//   public: [{ name: "公共意外責任保險", prob: 78 }],
//   money: [{ name: "現金保險", prob: 55 }],
// };
