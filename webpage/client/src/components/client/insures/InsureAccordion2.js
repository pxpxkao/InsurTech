import React, { Component } from "react";
import InsureList from "./InsureList";

// let name = ["營業建物", "電子設備", "交通工具", "運輸工具"];

class InsureAccordion2 extends Component {
  render() {
    let { disabled, insures } = this.props;
    let colors = ["primary", "success", "warning", "info", "secondary"];
    // let outlines = disabled.map((d) => {
    //   if (d) return "";
    //   return "-outline";
    // });
    let btn_colors = disabled.map((d, idx) => {
      if (d === 1) return colors[4];
      return colors[idx];
    });

    return (
      <div class="accordion my-1" id="accordion2">
        <button
          class={`btn btn-sm btn-outline-${btn_colors[0]} ml-4`}
          id="building"
          type="button"
          data-toggle="collapse"
          data-target="#collapseBuilding"
          aria-expanded="false"
          aria-controls="collapseBuilding"
          disabled={disabled[0]}
        >
          營業建物
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[1]} ml-2`}
          id="electric"
          data-toggle="collapse"
          data-target="#collapseElec"
          aria-expanded="false"
          aria-controls="collapseElec"
          disabled={disabled[1]}
        >
          電子設備
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[2]} ml-2`}
          id="traffic"
          data-toggle="collapse"
          data-target="#collapseTraffic"
          aria-expanded="false"
          aria-controls="collapseTraffic"
          disabled={disabled[2]}
        >
          交通工具
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[3]} ml-2`}
          id="transport"
          data-toggle="collapse"
          data-target="#collapseTransport"
          aria-expanded="false"
          aria-controls="collapseTransport"
          disabled={disabled[3]}
        >
          運輸工具
        </button>

        <div
          id="collapseBuilding"
          class="collapse"
          aria-labelledby="building"
          data-parent="#accordion2"
        >
          <InsureList insures={insures.building} color={0} />
        </div>
        <div
          id="collapseElec"
          class="collapse"
          aria-labelledby="electric"
          data-parent="#accordion2"
        >
          <InsureList insures={insures.electric} color={1} />
        </div>
        <div
          id="collapseTraffic"
          class="collapse"
          aria-labelledby="traffic"
          data-parent="#accordion2"
        >
          <InsureList insures={insures.traffic} color={2} />
        </div>
        <div
          id="collapseTransport"
          class="collapse"
          aria-labelledby="transport"
          data-parent="#accordion2"
        >
          <InsureList insures={insures.transport} color={3} />
        </div>
      </div>
    );
  }
}

export default InsureAccordion2;

// let insures = {
//   building: [
//     { name: "商業火災保險", prob: 95 },
//     { name: "商業火災綜合保險", prob: 85 },
//   ],
//   electric: [{ name: "電子設備綜合保險", prob: 85 }],
//   traffic: [],
//   transport: [],
// };
