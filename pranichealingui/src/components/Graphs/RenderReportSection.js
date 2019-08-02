import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

export default class RenderReportSection extends Component {
  render() {
    return (
      <div className="mt-5">
        <h2 className="text-center">REPORT COMMENTS</h2>
        <div className="container mt-5 reportbg">
          <div className="row">
            <div className="col-lg-12 col-sm-6">
              {ReactHtmlParser(this.props.data)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
