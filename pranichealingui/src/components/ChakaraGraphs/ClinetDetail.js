import React, { Component } from "react";

export default class ClinetDetail extends Component {
  render() {
    let isSmoke = this.props.data.isSmoke === "1" ? "Yes" : "No";
    let isAlchol = this.props.data.isAlcohol === "1" ? "Yes" : "No";
    let isDrugs = this.props.data.isDrugs === "1" ? "Yes" : "No";
    let isBloodPressure =
      this.props.data.IsBloodPressure === "1" ? "Yes" : "No";
    let isPregrent = this.props.data.isPregrent === "1" ? "Yes" : "No";
    let Iscontagiousdisease =
      this.props.data.Iscontagiousdisease === "1" ? "Yes" : "No";
    let IspsychologicalDisorder =
      this.props.data.IspsychologicalDisorder === "1" ? "Yes" : "No";
    let isphysicalinjury =
      this.props.data.isphysicalinjury === "1" ? "Yes" : "No";
    return (
      <div>
        <div className="col-md-6 float-left">
          <ul className="list-group">
            <li className="list-group-item">First Name</li>
            <li className="list-group-item">Last Name</li>
            <li className="list-group-item">Email</li>
            <li className="list-group-item">Address</li>
            <li className="list-group-item">Contact Number</li>
            <li className="list-group-item">Is Somking</li>
            <li className="list-group-item">Is Alcohol</li>
            <li className="list-group-item">Is Drugs</li>
            <li className="list-group-item">Is BloodPressure</li>
            <li className="list-group-item">Is Pregrent</li>
            <li className="list-group-item">Drugs Details</li>
            <li className="list-group-item">Is Contagious Disease</li>

            <li className="list-group-item">Contagious Disease details</li>
            <li className="list-group-item">Is Psychological disorder</li>
            <li className="list-group-item">Psychological disorder details</li>
            <li className="list-group-item">Is serious Injury</li>
            <li className="list-group-item">Serious Injury details</li>
          </ul>
        </div>
        <div className="col-md-6 float-right">
          <ul className="list-group">
            <li className="list-group-item">{this.props.data.firstName}</li>
            <li className="list-group-item">{this.props.data.lastName}</li>
            <li className="list-group-item">{this.props.data.email}</li>

            <li className="list-group-item">
              <b>Street# </b>
              {this.props.data.street},<b>Apt# </b>
              {this.props.data.aptno},<b>city </b>
              {this.props.data.city},<b>state </b>
              {this.props.data.state}
            </li>

            <li className="list-group-item">{this.props.data.contactNumber}</li>
            <li className="list-group-item">{isSmoke}</li>
            <li className="list-group-item">{isAlchol}</li>
            <li className="list-group-item">{isDrugs}</li>
            <li className="list-group-item">{isBloodPressure}</li>
            <li className="list-group-item">{isPregrent}</li>
            <li className="list-group-item">
              {this.props.data.DrugsMedicationsdetails}
            </li>
            <li className="list-group-item">{Iscontagiousdisease}</li>

            <li className="list-group-item">
              {this.props.data.contagiousdisease_details}
            </li>
            <li className="list-group-item">{IspsychologicalDisorder}</li>
            <li className="list-group-item">
              {this.props.data.psychological_disorder_detail}
            </li>
            <li className="list-group-item">{isphysicalinjury}</li>
            <li className="list-group-item">
              {this.props.data.physicalinjury_details}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
