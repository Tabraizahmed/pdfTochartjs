import React, { Component } from "react";
import ClinetDetail from "./ClinetDetail";
export default class ChakaraGraphsDashboard extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
      clientInformation: []
    };
  }

  toggleClientInformation = () => {
    this.setState({ open: !this.state.open });
  };

  getUrlParameter = name => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };
  componentDidMount() {
    const clientId = this.getUrlParameter("clinetId");

    let apiUrl =
      "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblclient/GetClientById.php?id=" +
      clientId;

    fetch(apiUrl)
      .then(result => {
        if (result.status === 200) {
          return result.json();
        }
      })
      .then(data => {
        console.log(data);

        this.setState({ clientInformation: data });
      });
  }

  render() {
    const { open, clientInformation } = this.state;
    let loadClientInformation;
    if (open) {
      loadClientInformation = <ClinetDetail data={clientInformation} />;
    }

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <button
              onClick={this.toggleClientInformation}
              className="btn btn-success btn-sm float-right"
            >
              View Client Information
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">{loadClientInformation}</div>
        </div>
      </div>
    );
  }
}
