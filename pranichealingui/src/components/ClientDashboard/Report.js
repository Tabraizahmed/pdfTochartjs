import React, { Component } from "react";
import {
  GetValuesFromQueryString,
  GetGraphsLabelsAgainstGraphType,
  GetGraphDataAgainstGraphType,
  GetReportData,
  GetApiUrlByType,
  UrlTypes
} from "../Util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { ExceptionHandler, GetClientGraphDetails } from "../MethodsUtil";
import { array } from "prop-types";
import ChakraGraph from "../Graphs/ChakraGraph";
import D3Graph from "../Graphs/D3Graph";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChakraGraphControl: "",
      ChakraActivationGraphControl: ""
    };
  }
  componentDidMount() {
    // First get clients graph information from client graph details table

    this.getClientGraphsIds();
  }
  getClientGraphsIds = () => {
    let readUrl = GetApiUrlByType(UrlTypes.GETCLIENTGRAPHSIDS);
    fetch(readUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*"
      },
      mode: "cors",
      body: JSON.stringify({ id: GetValuesFromQueryString("id") })
    })
      .then(response => {
        response.json().then(data => {
          this.GrpahHandler(data);
        });
      })
      .then(function(data) {
        ExceptionHandler(data);
      })
      .catch(error => console.log(error));
  };
  LoadAllChakraGraphs = (id, apiUrl, graphType) => {
    if (graphType == "chakra") {
      GetClientGraphDetails(id, apiUrl).then(data => {
        this.setState({
          ChakraGraphControl: (
            <ChakraGraph
              labels={GetGraphsLabelsAgainstGraphType(0)}
              graphData={GetGraphDataAgainstGraphType(data)}
              reportData={GetReportData(data)}
            />
          )
        });
      });
    } else if (graphType == "activation") {
      GetClientGraphDetails(id, apiUrl).then(data => {
        this.setState({
          ChakraActivationGraphControl: (
            <ChakraGraph
              labels={GetGraphsLabelsAgainstGraphType(1)}
              graphData={GetGraphDataAgainstGraphType(data)}
              reportData={GetReportData(data)}
            />
          )
        });
      });
    }
  };
  GrpahHandler = data => {
    this.LoadAllChakraGraphs(
      data.records[0].ChakraGraphId,
      GetApiUrlByType(UrlTypes.CHAKRAGRAPHAPI),
      "chakra"
    );
    this.LoadAllChakraGraphs(
      data.records[0].ChakraActivationGraphId,
      GetApiUrlByType(UrlTypes.CHAKRAACTIVATIONGRAPHAPI),
      "activation"
    );
    this.LoadAllChakraGraphs(
      data.records[0].organsChartPartOneId,
      GetApiUrlByType(UrlTypes.CHAKRAORGANSPARTGRAPHONEAPI),
      0
    );
    this.LoadAllChakraGraphs(
      data.records[0].organsChartPartTwoId,
      GetApiUrlByType(UrlTypes.CHAKRAORGANSPARTGRAPHTWOAPI),
      0
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <Helmet>
          <title>Client Report Section</title>
        </Helmet>
        <h3 className="card-subtitle text-center">
          <h3 className="text-uppercase display-2">
            Before you proceed <br />
            please read carefully...
          </h3>
        </h3>
        <div className="text-left reportbg py-3 p-5">
          <h3 className="text-uppercase">note</h3>
          <p className="">
            Scanning is a profound method of observing and measuring the
            condition of the Human bio-plasmic body and the chakras. It has been
            introduced by Grand Master Choa Kok Sui as part of The Pranic
            Healing Technology.
          </p>
        </div>
        <h3 className="card-subtitle text-center">
          Major chakras size & activation level test
        </h3>
        <div className="row mt-5">
          <div className="col-lg-6 col-sm-6 text-center">
            <h3>BENCHMARK SIZE TEST</h3>
            {this.state.ChakraGraphControl}
          </div>
          <div className="col-lg-6 col-sm-6 text-center">
            <h3>ACTIVATION LEVEL TEST</h3>
            {this.state.ChakraActivationGraphControl}
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
