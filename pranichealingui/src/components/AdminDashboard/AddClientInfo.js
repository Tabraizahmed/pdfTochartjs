import React, { Component } from "react";

class AddClientInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      country: "",
      skypeId: "",
      dateOfBirth: "",
      sex: "",
      martialStaus: "",
      Occupation: "",
      imageUrl: "",

      isSmoke: "",
      isAlcohol: "",
      isDrugs: "",
      meditationOrSpiritualPractice: "",
      tendenciesToRemove: "",
      typeOfAilment: "",
      symptomsAndSeverity: "",
      since: "",
      isAilmentInherited: "",
      medicalReport: "",
      medicineUse: ""
    };
  }
  SaveClientInfoOnSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.SaveClientInfoOnSubmit}>
          <h3>Add new client</h3>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">First Name</label>
                <input
                  type="text"
                  required
                  value={this.state.firstName}
                  onChange={e => this.setState({ firstName: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Email</label>
                <input
                  value={this.state.email}
                  required
                  onChange={e => this.setState({ email: e.target.value })}
                  type="email"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Country</label>
                <input
                  required
                  value={this.state.country}
                  onChange={e => this.setState({ country: e.target.value })}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Date Of Birth</label>
                <input
                  type="Date"
                  required
                  value={this.state.dateOfBirth}
                  onChange={e => this.setState({ dateOfBirth: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Martial Staus</label>
                <input
                  type="text"
                  required
                  value={this.state.martialStaus}
                  onChange={e =>
                    this.setState({ martialStaus: e.target.value })
                  }
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">imageUrl</label>
                <input
                  type="file"
                  required
                  value={this.state.imageUrl}
                  onChange={e => this.setState({ imageUrl: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Is Alchol</label>
                <input
                  type="checkbox"
                  value={this.state.isAlcohol}
                  onChange={e => this.setState({ isAlcohol: e.target.checked })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">
                  MeditationOr Spiritual Practice
                </label>
                <input
                  type="checkbox"
                  value={this.state.meditationOrSpiritualPractice}
                  onChange={e =>
                    this.setState({
                      meditationOrSpiritualPractice: e.target.checked
                    })
                  }
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Type Of Ailment</label>
                <input
                  type="text"
                  value={this.state.typeOfAilment}
                  onChange={e =>
                    this.setState({ typeOfAilment: e.target.value })
                  }
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Since</label>
                <input
                  type="date"
                  value={this.state.since}
                  onChange={e => this.setState({ since: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Medicine Use</label>
                <input
                  type="text"
                  value={this.state.medicineUse}
                  onChange={e => this.setState({ medicineUse: e.target.value })}
                  className="form-control"
                />
              </div>
            </div>
            {/* main div partion */}
            <div className="col-lg-6 col-sm-12">
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Last Name</label>
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={e => this.setState({ lastName: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Contact Number</label>
                <input
                  type="text"
                  required
                  value={this.state.contactNumber}
                  onChange={e =>
                    this.setState({ contactNumber: e.target.value })
                  }
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">skypeId</label>
                <input
                  type="text"
                  required
                  value={this.state.skypeId}
                  onChange={e => this.setState({ skypeId: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">sex</label>
                <input
                  type="text"
                  required
                  value={this.state.sex}
                  onChange={e => this.setState({ sex: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Occupation</label>
                <input
                  type="text"
                  value={this.state.Occupation}
                  onChange={e => this.setState({ Occupation: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Is Smoke</label>
                <input
                  type="checkbox"
                  value={this.state.isSmoke}
                  onChange={e => this.setState({ isSmoke: e.target.checked })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Is Drugs</label>
                <input
                  type="checkbox"
                  value={this.state.isDrugs}
                  onChange={e => this.setState({ isDrugs: e.target.checked })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">
                  Tendencies To Remove
                </label>
                <input
                  type="text"
                  value={this.state.tendenciesToRemove}
                  onChange={e =>
                    this.setState({ tendenciesToRemove: e.target.value })
                  }
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">
                  Symptoms And Severity
                </label>
                <input
                  type="text"
                  value={this.state.symptomsAndSeverity}
                  onChange={e =>
                    this.setState({ symptomsAndSeverity: e.target.value })
                  }
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Medical Report</label>
                <input
                  type="text"
                  value={this.state.medicalReport}
                  onChange={e =>
                    this.setState({ medicalReport: e.target.value })
                  }
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <button className="btn btn-lg btn-success">Submit</button>
          &nbsp;
          <input type="reset" className="btn btn-lg btn-danger" />
        </form>
      </div>
    );
  }
}

export default AddClientInfo;