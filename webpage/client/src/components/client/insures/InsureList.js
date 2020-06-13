import React, { Component, Fragment } from "react";
import { insure_colors, insure_url } from "../../../utils";

class InsureList extends Component {
  render_insure = (insure, idx) => {
    return (
      <div class="justify-content-between align-items-center my-2">
        <a href={insure_url[insure.name]} target="_blank">
          <h6>{insure.name}</h6>
          <div className="progress">
            <div
              className={`progress-bar progress-bar-striped bg-${
                insure_colors[idx % 6]
              }`}
              role="progressbar"
              style={{ width: `${insure.prob}%` }}
              aria-valuenow={insure.prob}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </a>
      </div>
    );
  };
  render() {
    const { insures, color } = this.props;
    console.log(insures);
    return (
      <div class="my-2 mx-3">
        <hr class="my-1" />
        {insures ? (
          insures.map((insure, idx) => this.render_insure(insure, color))
        ) : (
          <Fragment />
        )}
      </div>
    );
  }
}

export default InsureList;

{
  /* <li class="list-group-item">
  <a
    href="https://www.cathay-ins.com.tw/cathayins/commercial/others/operationinsurence/"
    target="_blank"
  >
    <h6>現金保險</h6>
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-warning"
        role="progressbar"
        style={{ width: "55%" }}
        aria-valuenow="55"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </a>
</li>; */
}
