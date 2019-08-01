import React, { Component } from "react";
import { GetValuesFromQueryString } from "../Util";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChakraGraph from "./ChakraGraph";

export default class GraphView extends Component {
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
          this.setState({ chakraControl: <ChakraGraph graphData={data} /> });
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