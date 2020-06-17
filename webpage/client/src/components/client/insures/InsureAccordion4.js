import React, { Component } from "react";
import InsureList from "./InsureList";

// let name = ["海上運輸", "教職員", "董監事/經理", "旅遊行業", "醫師/藥師"];

class InsureAccordion4 extends Component {
  render() {
    let { disabled, insures } = this.props;
    let colors = ["primary", "success", "warning", "info", "dark", "secondary"];
    let btn_colors = disabled.map((d, idx) => {
      if (d === 1) return colors[5];
      return colors[idx];
    });

    return (
      <div class="accordion mt-1 mb-2" id="accordion4">
        <button
          class={`btn btn-sm btn-outline-${btn_colors[0]} ml-4`}
          id="sea"
          type="button"
          data-toggle="collapse"
          data-target="#collapseSea"
          aria-expanded="false"
          aria-controls="collapseSea"
          disabled={disabled[0]}
        >
          海上運輸
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[1]} ml-2`}
          id="faculty"
          data-toggle="collapse"
          data-target="#collapseFaculty"
          aria-expanded="false"
          aria-controls="collapseFaculty"
          disabled={disabled[1]}
        >
          教職員
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[2]} ml-2`}
          id="supervisor"
          data-toggle="collapse"
          data-target="#collapseSupervisor"
          aria-expanded="false"
          aria-controls="collapseSupervisor"
          disabled={disabled[2]}
        >
          董監事/經理
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[3]} ml-2`}
          id="tourism"
          data-toggle="collapse"
          data-target="#collapseTourism"
          aria-expanded="false"
          aria-controls="collapseTourism"
          disabled={disabled[3]}
        >
          旅遊行業
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[4]} ml-2`}
          id="medicine"
          data-toggle="collapse"
          data-target="#collapseMedicine"
          aria-expanded="false"
          aria-controls="collapseMedicine"
          disabled={disabled[4]}
        >
          醫師/藥師
        </button>

        <div
          id="collapseSea"
          class="collapse"
          aria-labelledby="sea"
          data-parent="#accordion4"
        >
          <InsureList insures={insures.sea} color={0} />
        </div>
        <div
          id="collapseFaculty"
          class="collapse"
          aria-labelledby="faculty"
          data-parent="#accordion4"
        >
          <InsureList insures={insures.faculty} color={1} />
        </div>
        <div
          id="collapseSupervisor"
          class="collapse"
          aria-labelledby="supervisor"
          data-parent="#accordion4"
        >
          <InsureList insures={insures.supervisor} color={2} />
        </div>
        <div
          id="collapseTourism"
          class="collapse"
          aria-labelledby="tourism"
          data-parent="#accordion4"
        >
          <InsureList insures={insures.tourism} color={3} />
        </div>
        <div
          id="collapseMedicine"
          class="collapse"
          aria-labelledby="medicine"
          data-parent="#accordion4"
        >
          <InsureList insures={insures.medicine} color={4} />
        </div>
      </div>
    );
  }
}

export default InsureAccordion4;

// let insures = {
//   sea: [],
//   faculty: [],
//   supervisor: [{ name: "董監事及經理人責任保險", prob: 80 }],
//   tourism: [],
//   medicine: [
//     { name: "醫師業務責任險", prob: 65 },
//     { name: "藥師與藥劑生業務責任保險", prob: 77 },
//   ],
// };
