import React, { Component } from "react";

class ClientInfo extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table">
          <caption>Clients Detail Table</caption>
          <thead>
            <tr>
              <th scope="Col">#</th>
              <th scope="Col">First Name</th>
              <th scope="Col">Last Name</th>
              <th scope="Col">Email</th>
              <th scope="Col">Contact Number</th>
              <th scope="Col">Country</th>
              <th scope="Col">SkypeId</th>
              <th scope="Col">Date of Birth</th>
              <th scope="Col">Sex</th>
              <th scope="Col">Martial Status</th>
              <th scope="Col">Occupation</th>
              <th scope="Col">Picture</th>
            </tr>
          </thead>
          <tbody>
            <tr>{/* loop will go here */}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClientInfo;
