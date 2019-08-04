import React, { Component } from "react";
import ClinetDetail from "./ClinetDetail";
import Modal from "react-responsive-modal";
import AddChakraGraphForm from "./AddChakraGraphForm";
import AddChakraActivationGraphForm from "./AddChakraActivationGraphForm";
import AddOrgansGraph from "./AddOrgansGraphForm";
import { GetValuesFromQueryString } from "../Util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class ClientDashboard extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      clientInformation: [],
      showChakraGraph: false,
      showActivationGraph: false,
      ShowOrgansGraph: false,
      clientDetailsToRender: ""
    };
  }

  toggleClientInformation = () => {
    this.setState({ open: !this.state.open });
  };
  GetClientInformation = () => {
    const clientId = GetValuesFromQueryString("clinetId");

    let readUrl = "";
    if (window.location.href.indexOf("berkeleypranichealing") > 0) {
      readUrl =
        "http://api.berkeleypranichealing.com/api/tblClient/GetClientById.php?id=" +
        clientId;
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblClient/GetClientById.php?id=" +
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
  };

  GetClientGraphDetails = () => {
    let readUrl = "";
    if (window.location.href.indexOf("berkeleypranichealing") > 0) {
      readUrl =
        "http://api.berkeleypranichealing.com/api/tblclientgraphsdetail/Read.php";
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblclientgraphsdetail/Read.php";
    }

    fetch(readUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*"
      },
      mode: "cors",
      body: JSON.stringify({ id: GetValuesFromQueryString("clinetId") })
    })
      .then(response => {
        response.json().then(data => {
          console.log(data.records);
          let clientGraphDetails = data.records.map(info => {
            return (
              <tr key={info.ChakraGraphId}>
                <td>{info.ChakraGraphId > 0 ? "Yes" : "No"}</td>
                <td>{info.ChakraActivationGraphId > 0 ? "Yes" : "No"}</td>
                <td>{info.organsChartPartOneId > 0 ? "Yes" : "No"}</td>
                <td>{info.organsChartPartTwoId > 0 ? "Yes" : "No"}</td>
                <td>{info.PsychologicalParametersId > 0 ? "Yes" : "No"}</td>
                <td>
                  {info.PsychologicalParametersPart2Id > 0 ? "Yes" : "No"}
                </td>
                <td>Empty</td>
              </tr>
            );
          });
          this.setState({ clientDetailsToRender: clientGraphDetails });
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
    this.GetClientInformation();
    this.GetClientGraphDetails();
  }

  openForm = val => {
    switch (val) {
      case 1:
        this.setState({ showChakraGraph: true });
        break;
      case 2:
        this.setState({ showActivationGraph: true });
        break;
      case 3:
        this.setState({ ShowOrgansGraph: true });
        break;
      default:
    }
  };
  onCloseModal = val => {
    switch (val) {
      case 1:
        this.setState({ showChakraGraph: false });
        toast.success("Chakra form has been saved successfully", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        break;
      case 2:
        this.setState({ showActivationGraph: false });
        toast.success("Chakra activation form has been saved successfully", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        break;
      case 3:
        this.setState({ ShowOrgansGraph: false });
        toast.success("Organs Chart part-1 form has been saved successfully", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        break;
      default:
    }
  };
  closePopup = val => {
    switch (val) {
      case 1:
        this.setState({ showChakraGraph: false });
        break;
      case 2:
        this.setState({ showActivationGraph: false });
        break;
      case 3:
        this.setState({ ShowOrgansGraph: false });
        break;
      default:
    }
  };
  render() {
    const {
      open,
      clientInformation,
      showChakraGraph,
      showActivationGraph,
      ShowOrgansGraph
    } = this.state;
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
        <div className="row mt-3">
          <div className="col-12 text-center">
            <button
              onClick={e => this.openForm(1)}
              className="btn btn-sm btn-warning btn-secondary"
            >
              Add Chakra Graph for client
            </button>
            &nbsp;
            <button
              onClick={e => this.openForm(2)}
              className="btn btn-sm btn-info btn-secondary"
            >
              Add Chakra Activation Graph
            </button>
            &nbsp;
            <button
              className="btn btn-sm btn-danger btn-secondary"
              onClick={e => this.openForm(3)}
            >
              Add Organs chart part-1 Graph
            </button>
            &nbsp;
            <button className="btn btn-sm btn-success btn-secondary">
              Add Organs chart part-1 Graph
            </button>
            &nbsp;
            <button className="btn btn-sm btn-primary">
              Add Organs chart part-2 Graph
            </button>
            &nbsp;
            <button className="btn btn-sm btn-warning btn-secondary">
              Add Psychological part-1 Graph
            </button>
            &nbsp;
            <button className="btn btn-sm btn-info btn-secondary">
              Add Psychological part-2 Graph
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Is Chakra Graph Added</th>
                    <th>Is Chakra Activation Graph Added</th>
                    <th>Is Organs chart part-1 Added </th>
                    <th>Is Organs Chart part-2 Added</th>
                    <th>Is Psychological part-1 Chart Added</th>
                    <th>Is Psychological part-2 Chart Added</th>
                    <th>Report URL</th>
                  </tr>
                </thead>
                <tbody>{this.state.clientDetailsToRender}</tbody>
              </table>
            </div>
          </div>
        </div>

        <Modal
          open={showChakraGraph}
          onClose={e => this.closePopup(1)}
          center
          closeOnOverlayClick={false}
        >
          <AddChakraGraphForm formCancelHandler={e => this.onCloseModal(1)} />
        </Modal>

        <Modal
          open={showActivationGraph}
          onClose={e => this.closePopup(2)}
          center
          closeOnOverlayClick={false}
        >
          <AddChakraActivationGraphForm
            formCancelHandler={e => this.onCloseModal(2)}
          />
        </Modal>

        <Modal
          open={ShowOrgansGraph}
          onClose={e => this.closePopup(3)}
          center
          closeOnOverlayClick={false}
        >
          <AddOrgansGraph formCancelHandler={e => this.onCloseModal(3)} />
        </Modal>
      </div>
    );
  }
}
