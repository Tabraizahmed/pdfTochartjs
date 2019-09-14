import React, { Component } from "react";
import { GetValuesFromQueryString } from "../Util";
import { GetClientGraphDetails } from "../MethodsUtil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChakraGraph from "./ChakraGraph";
import D3Graph from "./D3Graph";

import {
  GetGraphsLabelsAgainstGraphType,
  GetGraphDataAgainstGraphType,
  GetReportData,
  GetApiUrlByType
} from "../Util";

export default class GraphViewHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chakraControl: "",
      errorText: "There is error in application or no data against this Id."
    };
  }
  RenderChakraGraph = (id, apiUrl, graphType) => {
    GetClientGraphDetails(id, apiUrl).then(data => {
      this.setState({
        chakraControl: (
          <ChakraGraph
            labels={GetGraphsLabelsAgainstGraphType(graphType)}
            graphData={GetGraphDataAgainstGraphType(data)}
            reportData={GetReportData(data)}
          />
        )
      });
    });
  };

  RenderD3Graph = (id, apiUrl, graphType) => {
    debugger;
    GetClientGraphDetails(id, apiUrl).then(data => {
      this.setState({
        chakraControl: (
          <D3Graph
            labels={GetGraphsLabelsAgainstGraphType(graphType)}
            graphData={GetGraphDataAgainstGraphType(data)}
            reportData={GetReportData(data)}
          />
        )
      });
    });
  };

  componentDidMount() {
    debugger;
    var graphId = GetValuesFromQueryString("graphId");
    var graphType = parseInt(GetValuesFromQueryString("type"));
    const apiUrl = GetApiUrlByType(graphType);

    if (
      graphType === 0 ||
      graphType === 1 ||
      graphType === 2 ||
      graphType === 3
    ) {
      this.RenderChakraGraph(graphId, apiUrl, graphType);
    } else if (graphType === 4 || graphType === 5) {
      this.RenderD3Graph(graphId, apiUrl, graphType);
    }
  }
  render() {
    return (
      <div>
        <ToastContainer />
        {this.state.chakraControl}
      </div>
    );
  }
}
