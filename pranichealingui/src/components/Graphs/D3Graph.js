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

export default class D3Graph extends Component {
  render() {
    const { Region } = Guide;
    const data = [
      {
        title: "Dynamism % \n basic",

        ranges: [20, 40, 60, 80, 100],
        actual: 48,
        target: 48
      },
      {
        title: "Ability to attract money % \n basic",

        ranges: [20, 40, 60, 80, 100],
        actual: 68,
        target: 68
      },
      {
        title: "Productivity % \n basic",

        ranges: [20, 40, 60, 80, 100],
        actual: 60,
        target: 60
      },
      {
        title: "Sexual Drive % \n sex",

        ranges: [20, 40, 60, 80, 100],
        actual: 58,
        target: 58
      },
      {
        title: "Physical Violence % \n meng mein",

        ranges: [20, 40, 60, 80, 100],
        actual: 44,
        target: 44
      },
      {
        title: "Sixth Sense % \n navel",

        ranges: [20, 40, 60, 80, 100],
        actual: 54,
        target: 54
      },
      {
        title: "Depression % \n solar plexus",

        ranges: [20, 40, 60, 80, 100],
        actual: 50,
        target: 50
      }
    ];
    let y = 0;
    const yGap = 0.1;
    return (
      <div>
        <Chart
          className="chartDiv"
          height={window.innerHeight}
          padding={[200, 200]}
          forceFit
        >
          {data.map(data => {
            const ranges = data.ranges;
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
      </div>
    );
  }
}
