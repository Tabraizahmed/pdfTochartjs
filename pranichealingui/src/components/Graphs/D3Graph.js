import React, { Component } from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import RenderReportSection from "./RenderReportSection";
import $ from "jquery";

export default class D3Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphData: props.graphData,
      labels: props.labels,
      reportData: props.reportData,
      range: [20, 40, 60, 80, 100]
    };
  }
  removeExtraFields = () => {
    console.log("Function called");
    var extraElements = $(".chartDiv").firstChild.children;
    for (var i = 0; i < extraElements.length - 1; i++) {
      $(extraElements)[i].remove();
    }
  };
  render() {
    const { Region } = Guide;

    const data = [
      {
        title: this.state.labels[0],

        ranges: this.state.range,
        actual: parseInt(this.state.graphData[0]),
        target: parseInt(this.state.graphData[0])
      },
      {
        title: this.state.labels[1],

        ranges: this.state.range,
        actual: parseInt(this.state.graphData[1]),
        target: parseInt(this.state.graphData[1])
      },
      {
        title: this.state.labels[2],

        ranges: this.state.range,
        actual: parseInt(this.state.graphData[2]),
        target: parseInt(this.state.graphData[2])
      },
      {
        title: this.state.labels[3],

        ranges: this.state.range,
        actual: parseInt(this.state.graphData[3]),
        target: parseInt(this.state.graphData[3])
      },
      {
        title: this.state.labels[4],

        ranges: this.state.range,
        actual: parseInt(this.state.graphData[4]),
        target: parseInt(this.state.graphData[4])
      },
      {
        title: this.state.labels[5],

        ranges: this.state.range,
        actual: parseInt(this.state.graphData[5]),
        target: parseInt(this.state.graphData[5])
      },
      {
        title: this.state.labels[6],

        ranges: this.state.range,
        actual: parseInt(this.state.graphData[6]),
        target: parseInt(this.state.graphData[6])
      }
    ];

    let y = 0;
    const yGap = 0.1;
    return (
      <div>
        <Chart
          onAnimationEnd={this.removeExtraFields}
          className="chartDiv"
          height={window.innerHeight}
          padding={[200, 200]}
          forceFit
        >
          {data.map(data => {
            const ranges = [20, 40, 60, 80, 100];
            const cols = {
              actual: {
                min: 0,
                max: ranges[4],
                nice: false
              },
              target: {
                min: 0,
                max: ranges[4],
                nice: false
              }
            };
            return (
              <View
                className="view"
                key={data.title}
                start={{
                  x: 0,
                  y: y
                }}
                end={{
                  x: 1,
                  y: y + yGap
                }}
                data={[data]}
                scale={cols}
              >
                <Coord transpose />
                <Axis name="actual" position="right" />
                <Axis name="target" visible={false} />
                <Geom
                  type="point"
                  position="title*target"
                  color="#eb2828"
                  shape="line"
                  size={12}
                  style={{
                    lineWidth: 2
                  }}
                />
                <Geom
                  type="interval"
                  position="title*actual"
                  color="#663333"
                  size={10}
                />
                <Guide>
                  <Region
                    start={[-1, 0]}
                    end={[1, ranges[0]]}
                    style={{
                      fill: "#66cc66",
                      fillOpacity: 0.85
                    }}
                  />
                  <Region
                    start={[-1, ranges[0]]}
                    end={[1, ranges[1]]}
                    style={{
                      fill: "#99cc99",
                      fillOpacity: 0.85
                    }}
                  />
                  <Region
                    start={[-1, ranges[1]]}
                    end={[1, ranges[2]]}
                    style={{
                      fill: "#ffcc99",
                      fillOpacity: 0.85
                    }}
                  />

                  <Region
                    start={[-1, ranges[1]]}
                    end={[1, ranges[3]]}
                    style={{
                      fill: "#cc9999",
                      fillOpacity: 0.85
                    }}
                  />
                  <Region
                    start={[-1, ranges[1]]}
                    end={[1, ranges[4]]}
                    style={{
                      fill: "#cc6666",
                      fillOpacity: 0.85
                    }}
                  />
                </Guide>

                {(y += yGap + 0.125)}
              </View>
            );
          })}
        </Chart>
        {<RenderReportSection data={this.state.reportData} />}
      </div>
    );
  }
}
