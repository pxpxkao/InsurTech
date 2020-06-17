import React, { Component, Fragment } from "react";
import { insure_colors, insure_url } from "../../../utils";

class InsureList extends Component {
  render_insure = (insure, idx) => {
    return (
      <div className="justify-content-between align-items-center my-2">
        <a href={insure_url[insure.name]} target="_blank">
          <h6>{insure.name}</h6>
          <div className="progress">
            <div
              className={`progress-bar progress-bar bg-${
                insure_colors[idx % 6]
              }`}
              role="progressbar"
              style={{ width: `${insure.prob}%` }}
              aria-valuenow={insure.prob}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div>{insure.prob}%</div>
            </div>
          </div>
        </a>
      </div>
    );
  };
  render() {
    let { insures, color } = this.props;
    // sort by value
    insures = insures.sort(function (a, b) {
      return b.prob - a.prob;
    });
    // console.log(insures);
    return (
      <div className="my-2 mx-3">
        <hr className="my-1" />
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
