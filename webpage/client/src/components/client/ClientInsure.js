import React, { Component } from "react";
import InsureAccordion from "./insures/InsureAccordion";
import InsureAccordion2 from "./insures/InsureAccordion2";
import InsureAccordion3 from "./insures/InsureAccordion3";
import InsureAccordion4 from "./insures/InsureAccordion4";

class ClientInsure extends Component {
  render() {
    const { client } = this.props;
    const disabled = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1];
    // const disabled = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    return (
      <div className="col col-12 col-sm-6">
        <div class="card mb-3">
          <h5 class="card-header">法人險種需求推薦</h5>
          <InsureAccordion disabled={disabled.slice(0, 5)} />
          <hr class="my-1" />
          <InsureAccordion2 disabled={disabled.slice(5, 9)} />
          <hr class="my-1" />
          <InsureAccordion3 disabled={disabled.slice(9, 14)} />
          <hr class="my-1" />
          <InsureAccordion4 disabled={disabled.slice(14, 20)} />
        </div>
      </div>
    );
  }
}

export default ClientInsure;
