import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
import RenderReportSection from "./RenderReportSection";

export default class ChakraGraph extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      graphData: props.graphData,
      reportData: props.reportData
    };
    this.commonOptions = {
      label: "Set one",
      backgroundColor: "transparent",
      borderColor: "rgba(200,0,0,0.6)",
      fill: false,
      radius: 6,
      pointRadius: 6,
      pointBorderWidth: 3,
      pointBackgroundColor: "orange",
      pointBorderColor: "rgba(200,0,0,0.6)",
      pointHoverRadius: 2
    };

    this.labels = this.props.labels;

    this.ChakraDataSet = {
      labels: this.labels,
      datasets: [
        {
          ...this.commonOptions,
          data: this.state.graphData
        }
      ]
    };
    this.options = {
      responsive: true,
      legend: {
        display: false
      },

      scale: {
        ticks: {
          callback: function() {
            return "";
          },
          backdropColor: "rgba(0, 0, 0, 0)"
        }
      }
    };
  }
  render() {
    return (
      <div>
        <Radar data={this.ChakraDataSet} options={this.options} />
        {<RenderReportSection data={this.state.reportData} />}
      </div>
    );
  }
}
