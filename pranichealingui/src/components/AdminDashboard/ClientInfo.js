import React, { Component } from "react";
import Modal from "react-responsive-modal";
import AddClientInfo from "./AddClientInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ClientInfo extends Component {
  constructor() {
    super();
    this.state = {
      completeData: [],
      clientsInfo: [],
      clientHealthInfo: [],
      clientTendencies: [],
      open: false,
      habitPopup: false,
      addNewClient: false
    };
  }

  onActionddlChange = (e, clientId) => {
    // fetch which user on change triggered
    let ClientInfo = this.completeData.records.find(
      element => element.id === clientId
    );
    let clientToRender = [];
    clientToRender.push(ClientInfo);
    if (e.target.value === "1") {
      this.setState({ clientHealthInfo: "" });
      let clientHealthInfo = clientToRender.map(client => {
        return (
          <tr key={client.id}>
            <td>{client.typeOfAilment}</td>
            <td>{client.symptomsAndSeverity}</td>
            <td>{client.since}</td>
            <td>{client.medicalReport}</td>
            <td>{client.medicineUse}</td>
          </tr>
        );
      });
      this.setState({ clientHealthInfo: clientHealthInfo });
      this.setState({ open: true });
    } else if (e.target.value === "2") {
      this.setState({ clientTendencies: "" });

      let isSmoke = ClientInfo.isSmoke === "1" ? "Yes" : "No";
      let isAlchol = ClientInfo.isAlcohol === "1" ? "Yes" : "No";
      let isDrugs = ClientInfo.isDrugs === "1" ? "Yes" : "No";
      let clientTendencies = clientToRender.map(client => {
        return (
          <tr key={client.id}>
            <td>{isSmoke}</td>
            <td>{isAlchol}</td>
            <td>{isDrugs}</td>
            <td>{client.meditationOrSpiritualPractice}</td>
            <td>{client.tendenciesToRemove}</td>
          </tr>
        );
      });
      this.setState({ clientTendencies: clientTendencies });
      this.setState({ habitPopup: true });
    }
  };
  onCloseModal = () => {
    this.setState({ open: false });
    this.setState({ habitPopup: false });
  };
  componentDidMount() {
    fetch(
      "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblclient/Read.php"
    )
      .then(result => {
        if (result !== undefined) {
          return result.json();
        }
      })
      .then(data => {
        if (data !== undefined) {
          this.completeData = data;

          let mappedData = data.records.map(client => {
            return (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>
                  {client.firstName},{client.lastName}
                </td>

                <td>{client.dateOfBirth}</td>
                <td>{client.sex}</td>
                <td>{client.email}</td>
                <td>{client.contactNumber}</td>
                <td>
                  <img
                    alt={client.firstName}
                    className="img-fluid"
                    src={client.imageUrl}
                  />
                </td>
                <td>
                  <select onChange={e => this.onActionddlChange(e, client.id)}>
                    <option value="0">--Select--</option>
                    <option value="1">View Client Health Info</option>
                    <option value="2">View Client Habits Info</option>
                  </select>
                  &nbsp;
                  <button className="btn btn-success btn-sm">Edit</button>{" "}
                  &nbsp;
                  <button
                    onClick={e => this.onDeleteClick(client.id)}
                    className="btn btn-danger  btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          });
          this.setState({ clientsInfo: mappedData });
        }
      });
  }
  onAddNewClient = () => {
    this.setState({ addNewClient: true });
  };
  onDeleteClick = clientId => {
    if (clientId !== undefined) {
      let clientRowToDelete = {
        id: clientId
      };

      fetch(
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblclient/Delete.php",
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(clientRowToDelete)
        }
      )
        .then(function(response) {
          toast.success(
            "Client has been deleted, Page is going to be refreshed"
          );
          setTimeout(function() {
            window.location.reload();
          }, 3000);
          console.log("success data= " + response);
        })
        .then(function(data) {
          if (data !== undefined) {
            toast.error("There is error in application. Please try later");
            console.log("success data= " + data);
          }
        });
    }
  };
  toggleAddNewSection = () => {
    this.setState({ addNewClient: !this.state.addNewClient });
  };
  render() {
    const { open, habitPopup, addNewClient } = this.state;
    let addClientSection;
    if (addNewClient) {
      addClientSection = <AddClientInfo />;
    }
    return (
      <div>
        {addClientSection}
        <div className="table-responsive">
          <div className="text-right">
            <button
              className="btn btn-success btn-lg"
              onClick={this.toggleAddNewSection}
            >
              Add New Client
            </button>
          </div>
          <h3>Clients Details</h3>
          <table className="table mt-2">
            <thead>
              <tr>
                <th scope="Col">#</th>
                <th scope="Col">Name</th>
                <th scope="Col">Date of Birth</th>
                <th scope="Col">Sex</th>
                <th scope="Col">Email</th>
                <th scope="Col">Contact Number</th>
                <th scope="Col">Picture</th>
                <th scope="Col">Actions</th>
              </tr>
            </thead>
            <tbody>{this.state.clientsInfo}</tbody>
            <tbody />
          </table>
        </div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h3>Client Tendencies</h3>
          <table className="table mt-2">
            <thead>
              <tr>
                <th scope="Col">Ailgment Type</th>
                <th scope="Col">Symptoms</th>
                <th scope="Col">Since</th>
                <th scope="Col">Medical Report</th>
                <th scope="Col">Medicine Use</th>
              </tr>
            </thead>
            <tbody>{this.state.clientHealthInfo}</tbody>
          </table>
        </Modal>
        <Modal open={habitPopup} onClose={this.onCloseModal} center>
          <h3>Clients Habits</h3>
          <table className="table mt-2">
            <thead>
              <tr>
                <th scope="Col">Is Somking</th>
                <th scope="Col">Is Alcohol</th>
                <th scope="Col">Is Drugs</th>
                <th scope="Col">Meditation Or Spiritual Practice</th>
                <th scope="Col">Tendencies To Remove</th>
              </tr>
            </thead>
            <tbody>{this.state.clientTendencies}</tbody>
          </table>
        </Modal>
        <ToastContainer />
      </div>
    );
  }
}

export default ClientInfo;
