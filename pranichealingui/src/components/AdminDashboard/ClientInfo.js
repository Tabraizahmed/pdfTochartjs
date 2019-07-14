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
          <ul className="list-group" key={client.id}>
            <li className="list-group-item">{isSmoke}</li>
            <li className="list-group-item">{isAlchol}</li>
            <li className="list-group-item">{isDrugs}</li>
            <li className="list-group-item">{isBloodPressure}</li>
            <li className="list-group-item">{isPregrent}</li>

            <li className="list-group-item">
              {client.DrugsMedicationsdetails}
            </li>
            <li className="list-group-item">{Iscontagiousdisease}</li>
            <li className="list-group-item">
              {client.contagiousdisease_details}
            </li>

            <li className="list-group-item">{IspsychologicalDisorder}</li>
            <li className="list-group-item">
              {client.psychological_disorder_detail}
            </li>
            <li className="list-group-item">
              {client.psychological_disorder_detail}
            </li>
            <li className="list-group-item">{client.physicalinjury_details}</li>
          </ul>
        );
      });
      this.setState({ clientTendencies: clientTendencies });
      this.setState({ habitPopup: true });
    } else if (e.target.value === "2") {
      window.location.href = "/chakaragraph?clinetId=" + clientId;
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
                    <option value="2">Client Chakara Graph</option>
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
          <div className="float-left">
            <ul className="list-group">
              <li className="list-group-item">Is Somking</li>
              <li className="list-group-item">Is Alcohol</li>
              <li className="list-group-item">Is Drugs</li>
              <li className="list-group-item">Is BloodPressure</li>
              <li className="list-group-item">Is Pregrent</li>
              <li className="list-group-item">Drugs Details</li>
              <li className="list-group-item">Is Contagious Disease</li>

              <li className="list-group-item">Contagious Disease details</li>
              <li className="list-group-item">Is Psychological disorder</li>
              <li className="list-group-item">
                Psychological disorder details
              </li>
              <li className="list-group-item">Is serious Injury</li>
              <li className="list-group-item">Serious Injury details</li>
            </ul>
          </div>
          <div className="float-right">{this.state.clientTendencies}</div>
        </Modal>
        <ToastContainer />
      </div>
    );
  }
}

export default ClientInfo;
