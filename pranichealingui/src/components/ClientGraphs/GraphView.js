import React, { Component } from "react";
import { GetValuesFromQueryString } from "../Util";
import { Radar } from "react-chartjs-2";

export default class GraphView extends Component {
  componentDidMount() {
    var clientId = GetValuesFromQueryString("clientid");
    var graphType = GetValuesFromQueryString("type");
  }
  render() {
    return (
      <div>
        <h1>Client GraphView</h1>
      </div>
    );
  }
}
