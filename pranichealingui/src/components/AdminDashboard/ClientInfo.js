import React, { Component } from "react";
import Modal from "react-responsive-modal";
import AddClientInfo from "./AddClientInfo";

class ClientInfo extends Component {
  constructor() {
    super();
    this.state = {
      clientsInfo: [],
      clientHealthInfo: [],
      clientTendencies: [],
      open: false,
      habitPopup: false,
      addNewClient: false
    };
  }
  onActionddlChange = e => {
    if (e.target.value === "1") {
      this.setState({ open: true });
    } else if (e.target.value === "2") {
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
        return result.json();
      })
      .then(data => {
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
              <td>{client.imageUrl}</td>
              <td>
                <select onChange={this.onActionddlChange}>
                  <option value="0">--Select--</option>
                  <option value="1">View Client Health Info</option>
                  <option value="2">View Client Habits Info</option>
                </select>
                &nbsp;
                <button className="btn btn-success btn-sm">Edit</button> &nbsp;
                <button className="btn btn-danger  btn-sm">Delete</button>
              </td>
            </tr>
          );
        });
        this.setState({ clientsInfo: mappedData });
        // Render health info popup
        let clientHealthInfo = data.records.map(client => {
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

        // Render tendencies
        let clientTendencies = data.records.map(client => {
          return (
            <tr key={client.id}>
              <td>{client.isSmoke}</td>
              <td>{client.isAlcohol}</td>
              <td>{client.isDrugs}</td>
              <td>{client.meditationOrSpiritualPractice}</td>
              <td>{client.tendenciesToRemove}</td>
            </tr>
          );
        });
        this.setState({ clientTendencies: clientTendencies });
      });
  }
  onAddNewClient = () => {
    this.setState({ addNewClient: true });
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
      </div>
    );
  }
}

export default ClientInfo;
