import React, { Component } from "react";

export default class ClinetDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            <li className="list-group-item">{this.props.data.isSmoke}</li>
            <li className="list-group-item">{this.props.data.isAlcohol}</li>
            <li className="list-group-item">{this.props.data.isDrugs}</li>
            <li className="list-group-item">
              {this.props.data.IsBloodPressure}
            </li>
            <li className="list-group-item">{this.props.data.isPregrent}</li>
            <li className="list-group-item">
              {this.props.data.DrugsMedicationsdetails}
            </li>
            <li className="list-group-item">
              {this.props.data.Iscontagiousdisease}
            </li>

            <li className="list-group-item">
              {this.props.data.contagiousdisease_details}
            </li>
            <li className="list-group-item">
              {this.props.data.IspsychologicalDisorder}
            </li>
            <li className="list-group-item">
              {this.props.data.psychological_disorder_detail}
            </li>
            <li className="list-group-item">
              {this.props.data.isphysicalinjury}
            </li>
            <li className="list-group-item">
              {this.props.data.physicalinjury_details}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
