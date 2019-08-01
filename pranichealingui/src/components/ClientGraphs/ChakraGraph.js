import React, { Component } from "react";
import { Radar } from "react-chartjs-2";
import ReactHtmlParser from "react-html-parser";

export default class ChakraGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphData: props.graphData.data[0]
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

    this.labels = [
      "Crown Chakra",
      "Forehead Chakra",
      "Ajna Chakra",
      "Throat Chakra",
      "Heart Chakra (Front)",
      "Heart Chakra (Back)",
      "Solar Plex Charka (Front)",
      "Solar Plex Charka (Back)",
      "Spleen Chakra (Front)",
      "Spleen Chakra (Back)",
      "Meng Mein Chakra",
      "Sex Chakra",
      "Basic Chakra"
    ];

    this.ChakraDataSet = {
      labels: this.labels,
      datasets: [
        {
          ...this.commonOptions,
          data: [
            this.state.graphData.CrownChakra,
            this.state.graphData.ForeheadChakra,
            this.state.graphData.AjnaChakra,
            this.state.graphData.ThroatChakra,
            this.state.graphData.HeartChakra_front,
            this.state.graphData.HeartChakra_back,
            this.state.graphData.SolarPlexCharka_front,
            this.state.graphData.SolarPlexCharka_back,
            this.state.graphData.SpleenChakra_front,
            this.state.graphData.SpleenChakra_back,
            this.state.graphData.MengMeinChakra,
            this.state.graphData.SexChakra,
            this.state.graphData.BasicChakra
          ]
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
        <h2 className="text-center mt-3">REPORT COMMENTS</h2>
        <div className="container mt-5 reportbg">
          <div className="row">
            <div className="col-lg-12 col-sm-6">
              <p className="text-left">
                {ReactHtmlParser(this.state.graphData.graphReport)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
