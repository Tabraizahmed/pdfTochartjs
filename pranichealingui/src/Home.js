import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

class Home extends Component {
  constructor(props) {
    super(props);
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
            28,
            26,
            30,
            29,
            28,
            30,
            32,
            31,
            29,
            28.5,
            28.5,
            28.5,
            28.0,
            29.5
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
    this.ActivationLevelDataSet = {
      labels: this.labels,
      datasets: [
        {
          ...this.commonOptions,
          data: [
            12.5,
            11.5,
            13.0,
            13.0,
            12.5,
            13.0,
            13.5,
            14.5,
            8.0,
            9.0,
            9.0,
            13.0,
            13.0,
            12.5
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h3 className="card-subtitle text-center">
          Major chakras size & activation level test
        </h3>
        <div className="row mt-5">
          <div className="col-lg-6 col-sm-6 text-center">
            <h3>BENCHMARK SIZE TEST</h3>
            <Radar data={this.ChakraDataSet} options={this.options} />
          </div>
          <div className="col-lg-6 col-sm-6 text-center">
            <h3>ACTIVATION LEVEL TEST</h3>
            <Radar data={this.ActivationLevelDataSet} options={this.options} />
          </div>
        </div>
        <div className="container mt-5 reportbg">
          <div className="row">
            <div className="col-lg-12 col-sm-6">
              <h2>REPORT</h2>
              <p className="text-left">
                The size of your aura is about 28 cm (approximately 11 inches)
                which is bigger than an orinary person. This should becuase of
                your pranic healing and twin hearts practices. The average
                compared to an ordinary person. The average diameter size of
                chakras in an orinary person is about 3 to 4 inches. As we
                develop, the diameter increases in size.
              </p>
              <p className="text-left">
                Maecenas pulvinar tincidunt vestibulum. Integer congue dignissim
                neque nec fringilla. Maecenas quis elementum ex, at congue
                libero. Nam vel quam vel dolor euismod vestibulum vel at libero.
                Pellentesque nec ipsum interdum, pulvinar enim ac, rutrum neque.
                Phasellus dolor dolor, ultricies eu porta sit amet, lobortis
                quis lorem. In quam ex, condimentum porttitor blandit sit amet,
                pretium quis neque. Curabitur imperdiet convallis ipsum, sed
                dictum urna tincidunt mollis. Nullam et nisl magna. Vestibulum
                rhoncus tellus ut varius tincidunt.
              </p>
              <p className="text-left">
                Pellentesque quis malesuada diam. Ut vitae quam eget ex
                condimentum molestie. className aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
