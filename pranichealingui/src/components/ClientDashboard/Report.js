import React, { Component } from "react";
import {
  GetValuesFromQueryString,
  GetGraphsLabelsAgainstGraphType,
  GetGraphDataAgainstGraphType,
  GetReportData
} from "../Util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChakraGraph from "./ChakraGraph";
import D3Graph from "./D3Graph";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      benchMarkChakraSizeTest: "",
      ActivationLevelSizeTest: ""
    };
  }
  render() {
    return (
      <div className="container-fluid py-5 mt-5">
        <h3 class="card-subtitle text-center">
          Major chakras size & activation level test
        </h3>
        <div class="row mt-5">
          <div class="col-lg-6 col-sm-6 text-center">
            <h3>BENCHMARK SIZE TEST</h3>
            {/* Render Graph here */}
          </div>
          <div class="col-lg-6 col-sm-6 text-center">
            <h3>ACTIVATION LEVEL TEST</h3>
            {/* Render Graph here */}
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
