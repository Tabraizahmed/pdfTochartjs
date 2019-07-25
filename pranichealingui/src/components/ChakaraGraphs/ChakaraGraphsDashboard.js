import React, { Component } from "react";
import ClinetDetail from "./ClinetDetail";
import Modal from "react-responsive-modal";
import ChakraGraphForm from "./ChakraGraphForm";
import { GetValuesFromQueryString } from "../Util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class ChakaraGraphsDashboard extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      clientInformation: [],
      showChakraGraph: false
    };
  }

  toggleClientInformation = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    const clientId = GetValuesFromQueryString("clinetId");
    let readUrl = "";
    if (window.location.href.indexOf("berkeleypranichealing") > 0) {
      readUrl =
        "http://api.berkeleypranichealing.com/api/tblclient/GetClientById.php?id=" +
        clientId;
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblclient/GetClientById.php?id=" +
        clientId;
    }

    fetch(readUrl)
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
  openAddChakraForm = () => {
    this.setState({ showChakraGraph: true });
  };
  onCloseModal = () => {
    toast.success("Chakra form has been saved successfully", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    this.setState({ showChakraGraph: false });
  };

  render() {
    const { open, clientInformation, showChakraGraph } = this.state;
    let loadClientInformation;
    if (open) {
      loadClientInformation = <ClinetDetail data={clientInformation} />;
    }

    return (
      <div>
        <ToastContainer />
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
          <div className="col-12 mt-1">{loadClientInformation}</div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <button
              onClick={this.openAddChakraForm}
              className="btn btn-lg btn-warning btn-secondary"
            >
              Add Chakra Graph for client
            </button>
            &nbsp;
            <button className="btn btn-lg btn-info btn-secondary">
              View client Chakra Graph history
            </button>
          </div>
        </div>

        <Modal open={showChakraGraph} onClose={this.onCloseModal} center>
          <ChakraGraphForm formCancelHandler={this.onCloseModal} />
        </Modal>
      </div>
    );
  }
}
