import React, { Component } from "react";
import InsureList from "./InsureList";

// let name = ["鍋爐", "機械", "營造", "安裝工程", "營建機具"];

class InsureAccordion3 extends Component {
  render() {
    let { disabled, insures } = this.props;
    let colors = ["primary", "success", "warning", "info", "dark", "secondary"];
    let btn_colors = disabled.map((d, idx) => {
      if (d === 1) return colors[5];
      return colors[idx];
    });

    return (
      <div class="accordion my-1" id="accordion3">
        <button
          class={`btn btn-sm btn-outline-${btn_colors[0]} ml-4`}
          id="boiler"
          type="button"
          data-toggle="collapse"
          data-target="#collapseBoiler"
          aria-expanded="false"
          aria-controls="collapseBoiler"
          disabled={disabled[0]}
        >
          鍋爐
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[1]} ml-2`}
          id="machine"
          data-toggle="collapse"
          data-target="#collapseMachine"
          aria-expanded="false"
          aria-controls="collapseMachine"
          disabled={disabled[1]}
        >
          機械
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[2]} ml-2`}
          id="construct"
          data-toggle="collapse"
          data-target="#collapseConstruct"
          aria-expanded="false"
          aria-controls="collapseConstruct"
          disabled={disabled[2]}
        >
          營造
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[3]} ml-2`}
          id="install"
          data-toggle="collapse"
          data-target="#collapseInstall"
          aria-expanded="false"
          aria-controls="collapseInstall"
          disabled={disabled[3]}
        >
          安裝工程
        </button>
        <button
          class={`btn btn-sm btn-outline-${btn_colors[4]} ml-2`}
          id="machinery"
          data-toggle="collapse"
          data-target="#collapseMachinery"
          aria-expanded="false"
          aria-controls="collapseMachinery"
          disabled={disabled[4]}
        >
          營建機具
        </button>

        <div
          id="collapseBoiler"
          class="collapse"
          aria-labelledby="boiler"
          data-parent="#accordion3"
        >
          <InsureList insures={insures.boiler} color={0} />
        </div>
        <div
          id="collapseMachine"
          class="collapse"
          aria-labelledby="machine"
          data-parent="#accordion3"
        >
          <InsureList insures={insures.machine} color={1} />
        </div>
        <div
          id="collapseConstruct"
          class="collapse"
          aria-labelledby="construct"
          data-parent="#accordion3"
        >
          <InsureList insures={insures.construct} color={2} />
        </div>
        <div
          id="collapseInstall"
          class="collapse"
          aria-labelledby="install"
          data-parent="#accordion3"
        >
          <InsureList insures={insures.install} color={3} />
        </div>
        <div
          id="collapseMachinery"
          class="collapse"
          aria-labelledby="machinery"
          data-parent="#accordion3"
        >
          <InsureList insures={insures.machinery} color={4} />
        </div>
      </div>
    );
  }
}

export default InsureAccordion3;

// let insures = {
//   boiler: [],
//   machine: [],
//   construct: [],
//   install: [],
//   machinery: [],
// };
