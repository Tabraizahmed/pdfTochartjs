import React, { Component } from "react";
import Modal from "react-responsive-modal";
import AddClientInfo from "./AddClientInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import EditClientInfo from "./EditClientInfo";

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
      addNewClient: false,
      editClient: false,
      clientToEdit: {}
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
      this.setState({ clientTendencies: "" });

      let isSmoke = ClientInfo.isSmoke === "1" ? "Yes" : "No";
      let isAlchol = ClientInfo.isAlcohol === "1" ? "Yes" : "No";
      let isDrugs = ClientInfo.isDrugs === "1" ? "Yes" : "No";
      let isBloodPressure = ClientInfo.IsBloodPressure === "1" ? "Yes" : "No";
      let isPregrent = ClientInfo.isPregrent === "1" ? "Yes" : "No";
      let Iscontagiousdisease =
        ClientInfo.Iscontagiousdisease === "1" ? "Yes" : "No";
      let IspsychologicalDisorder =
        ClientInfo.IspsychologicalDisorder === "1" ? "Yes" : "No";
      let isphysicalinjury = ClientInfo.isphysicalinjury === "1" ? "Yes" : "No";

      let clientTendencies = clientToRender.map(client => {
        return (
          <tr key={client.id}>
            <td>{isSmoke}</td>
            <td>{isAlchol}</td>
            <td>{isDrugs}</td>
            <td>{isBloodPressure}</td>
            <td>{isPregrent}</td>
            <td>{client.DrugsMedicationsdetails}</td>
            <td>{Iscontagiousdisease}</td>
            <td>{client.contagiousdisease_details}</td>
            <td>{IspsychologicalDisorder}</td>
            <td>{client.psychological_disorder_detail}</td>
            <td>{isphysicalinjury}</td>
            <td>{client.psychological_disorder_detail}</td>
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
    let readUrl = "";
    if (window.location.href.indexOf("localhost:5511") > 0) {
      readUrl = "http://localhost:5511/pranichealingApi/api/tblClient/Read.php";
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblclient/Read.php";
    }
    fetch(readUrl)
      .then(result => {
        if (result.status === 200) {
          return result.json();
        } else {
        }
      })
      .then(data => {
        if (data !== undefined) {
          this.completeData = data;
          console.log(this.completeData);
          let mappedData = data.records.map(client => {
            return (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>
                  {client.firstName},{client.lastName}
                </td>

                <td>{client.email}</td>
                <td>{client.contactNumber}</td>
                <td>
                  <b>Street# </b>
                  {client.street},<b>Apt# </b>
                  {client.aptno},<b>city </b>
                  {client.city},<b>state </b>
                  {client.state}
                </td>
                <td>
                  <select onChange={e => this.onActionddlChange(e, client.id)}>
                    <option value="0">--Select--</option>
                    <option value="1">Client Health Tendencies Info</option>
                  </select>
                  &nbsp;
                  <button
                    className="btn btn-success btn-sm"
                    onClick={e => this.onEditClick(client.id)}
                  >
                    Edit
                  </button>{" "}
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
    this.scrollToTop();
  };
  onDeleteClick = clientId => {
    if (clientId !== undefined) {
      let clientRowToDelete = {
        id: clientId
      };
      confirmAlert({
        title: "Confirm to delete",
        message: "Are you sure to delete this client?",
        buttons: [
          {
            label: "Yes",
            onClick: () => this.deleteClient(clientRowToDelete)
          },
          {
            label: "No"
          }
        ],
        closeOnEscape: false,
        closeOnClickOutside: false
      });
    }
  };

  deleteClient = clientId => {
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
        body: JSON.stringify(clientId)
      }
    )
      .then(function(response) {
        toast.success("Client has been deleted, Page is going to be refreshed");
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
  };
  toggleAddNewSection = () => {
    this.setState({ addNewClient: !this.state.addNewClient });
  };

  onEditClick = clientId => {
    this.setState({
      clientToEdit: this.completeData.records.find(
        element => element.id === clientId
      )
    });
    this.setState({ editClient: true });
    this.scrollToTop();
  };
  scrollToTop = () => {
    var html = document.documentElement;
    html.scrollTop = 0;
  };
  render() {
    const { open, habitPopup, addNewClient, editClient } = this.state;
    let addClientSection;
    if (addNewClient) {
      addClientSection = <AddClientInfo />;
    }
    if (editClient) {
      addClientSection = (
        <EditClientInfo clientdetails={this.state.clientToEdit} />
      );
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

                <th scope="Col">Email</th>
                <th scope="col">Address</th>
                <th scope="Col">Contact Number</th>

                <th scope="Col">Actions</th>
              </tr>
            </thead>
            <tbody>{this.state.clientsInfo}</tbody>
            <tbody />
          </table>
        </div>

        <Modal open={habitPopup} onClose={this.onCloseModal} center>
          <h3>Clients Habits</h3>
          <div className="table-responsive">
            <table className="table mt-2">
              <thead>
                <tr>
                  <th scope="Col">Is Somking</th>
                  <th scope="Col">Is Alcohol</th>
                  <th scope="Col">Is Drugs</th>
                  <th scope="Col">Is BloodPressure</th>
                  <th scope="Col">Is Pregrent</th>

                  <th scope="Col">Drugs Details</th>
                  <th scope="Col">Is Contagious Disease</th>
                  <th scope="Col">Contagious Disease details</th>
                  <th scope="Col">Is Psychological disorder</th>
                  <th scope="Col">Psychological disorder details</th>
                  <th scope="Col">Is serious Injury</th>
                  <th scope="Col">Serious Injury details</th>
                </tr>
              </thead>
              <tbody>{this.state.clientTendencies}</tbody>
            </table>
          </div>
        </Modal>
        <ToastContainer />
      </div>
    );
  }
}

export default ClientInfo;
