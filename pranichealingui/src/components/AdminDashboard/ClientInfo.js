import React, { Component } from "react";

class ClientInfo extends Component {
  constructor() {
    super();
    this.state = {
      clientsInfo: []
    };
  }

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
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.dateOfBirth}</td>
              <td>{client.sex}</td>
              <td>{client.email}</td>
              <td>{client.contactNumber}</td>
              <td>{client.imageUrl}</td>
              <td>
                <select>
                  <option>--Select--</option>
                  <option>View Client Health Info</option>
                  <option>View Client Habits Info</option>
                </select>
                &nbsp;
                <button className="btn btn-success btn-sm">Edit</button> &nbsp;
                <button className="btn btn-danger  btn-sm">Delete</button>
              </td>
            </tr>
          );
        });
        this.setState({ clientsInfo: mappedData });
      });
  }

  render() {
    return (
      <div className="table-responsive">
        <div className="text-right">
          <button className="btn btn-success btn-lg">Add New Client</button>
        </div>
        <h3>Clients Details</h3>
        <table className="table mt-2">
          <thead>
            <tr>
              <th scope="Col">#</th>
              <th scope="Col">First Name</th>
              <th scope="Col">Last Name</th>
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
    );
  }
}

export default ClientInfo;
