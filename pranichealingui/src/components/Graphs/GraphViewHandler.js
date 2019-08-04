import React, { Component } from "react";
import { GetValuesFromQueryString } from "../Util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChakraGraph from "./ChakraGraph";
import {
  GetGraphsLabelsAgainstGraphType,
  GetGraphDataAgainstGraphType,
  GetReportData
} from "../Util";

export default class GraphViewHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chakraControl: ""
    };
  }
  loadClientChakraGraph = id => {
    let readUrl = "";
    if (window.location.href.indexOf("berkeleypranichealing") > 0) {
      readUrl =
        "http://api.berkeleypranichealing.com/api/tblChakraGraph/Read.php";
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblChakraGraph/Read.php";
    }
    fetch(readUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*"
      },
      mode: "cors",
      body: JSON.stringify({ id: id })
    })
      .then(response => {
        response.json().then(data => {
          console.log(data);
          this.setState({
            chakraControl: (
              <ChakraGraph
                labels={GetGraphsLabelsAgainstGraphType(1)}
                graphData={GetGraphDataAgainstGraphType(data)}
                reportData={GetReportData(data)}
              />
            )
          });
        });
      })
      .then(function(data) {
        if (data !== undefined) {
          toast.error("Error in application", {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }
      })
      .catch(error => console.log(error));
  };
  loadClientActivationGraph = id => {
    let readUrl = "";
    if (window.location.href.indexOf("berkeleypranichealing") > 0) {
      readUrl =
        "http://api.berkeleypranichealing.com/api/tblChakraActivationGraph/Read.php";
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblChakraActivationGraph/Read.php";
    }
    fetch(readUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*"
      },
      mode: "cors",
      body: JSON.stringify({ id: id })
    })
      .then(response => {
        response.json().then(data => {
          this.setState({
            chakraControl: (
              <ChakraGraph
                labels={GetGraphsLabelsAgainstGraphType(2)}
                graphData={GetGraphDataAgainstGraphType(data)}
                reportData={GetReportData(data)}
              />
            )
          });
        });
      })
      .then(function(data) {
        if (data !== undefined) {
          toast.error("Error in application", {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }
      })
      .catch(error => console.log(error));
  };
  loadOrgansChartPartOneGraph = id => {
    let readUrl = "";
    if (window.location.href.indexOf("berkeleypranichealing") > 0) {
      readUrl =
        "http://api.berkeleypranichealing.com/api/tblOrgansChartPartOne/Read.php";
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblOrgansChartPartOne/Read.php";
    }
    fetch(readUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*"
      },
      mode: "cors",
      body: JSON.stringify({ id: id })
    })
      .then(response => {
        response.json().then(data => {
          this.setState({
            chakraControl: (
              <ChakraGraph
                labels={GetGraphsLabelsAgainstGraphType(3)}
                graphData={GetGraphDataAgainstGraphType(data)}
                reportData={GetReportData(data)}
              />
            )
          });
        });
      })
      .then(function(data) {
        if (data !== undefined) {
          toast.error("Error in application", {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    var graphId = GetValuesFromQueryString("graphId");
    var graphType = GetValuesFromQueryString("type");
    if (graphType === "1") {
      this.loadClientChakraGraph(graphId);
    } else if (graphType === "2") {
      this.loadClientActivationGraph(graphId);
    } else if (graphType === "3") {
      this.loadOrgansChartPartOneGraph(graphId);
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
