import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileBase64 from "react-file-base64";

class EditClientInfo extends Component {
  constructor(props) {
    super(props);
    console.log(props.clientdetails);
  }
  getFiles(files) {
    if (files.file.size > 50000) {
      toast.error("File size should be less than 500 kb");
      return;
    }
    this.props.clientdetails.imageUrl = files.base64;
  }
  render() {
    return (
      <div>
        <form>
          <h3>Add new client</h3>
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="form-group required">
                <label
                  className="control-label"
                  htmlFor="formGroupExampleInput"
                >
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={this.props.clientdetails.firstName}
                  onChange={e => this.setState({ firstName: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group required">
                <label
                  className="control-label"
                  htmlFor="formGroupExampleInput"
                >
                  Email
                </label>
                <input
                  value={this.props.clientdetails.email}
                  required
                  onChange={e => this.setState({ email: e.target.value })}
                  type="email"
                  className="form-control"
                />
              </div>

              <div className="form-group required">
                <label
                  className="control-label"
                  htmlFor="formGroupExampleInput"
                >
                  Country
                </label>
                <input
                  required
                  value={this.props.clientdetails.country}
                  onChange={e => this.setState({ country: e.target.value })}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group required">
                <label
                  className="control-label"
                  htmlFor="formGroupExampleInput"
                >
                  Date Of Birth
                </label>
                <input
                  type="Date"
                  required
                  value={this.props.clientdetails.dateOfBirth}
                  onChange={e => this.setState({ dateOfBirth: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group required">
                <label
                  className="control-label"
                  htmlFor="formGroupExampleInput"
                >
                  Martial Staus
                </label>
                <input
                  type="text"
                  required
                  value={this.props.clientdetails.martialStaus}
                  onChange={e =>
                    this.setState({ martialStaus: e.target.value })
                  }
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Upload Image</label>
                <FileBase64
                  multiple={false}
                  onDone={this.getFiles.bind(this)}
                  required={true}
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Is Alchol</label>
                <input
                  type="checkbox"
                  value={this.props.clientdetails.isAlcohol}
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
                  value={this.props.clientdetails.meditationOrSpiritualPractice}
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
                  value={this.props.clientdetails.typeOfAilment}
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
                  value={this.props.clientdetails.since}
                  onChange={e => this.setState({ since: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Medicine Use</label>
                <input
                  type="text"
                  value={this.props.clientdetails.medicineUse}
                  onChange={e => this.setState({ medicineUse: e.target.value })}
                  className="form-control"
                />
              </div>
            </div>
            {/* main div partion */}
            <div className="col-lg-6 col-sm-12">
              <div className="form-group required">
                <label
                  className="control-label"
                  htmlFor="formGroupExampleInput"
                >
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  value={this.props.clientdetails.lastName}
                  onChange={e => this.setState({ lastName: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group required">
                <label
                  className="control-label"
                  htmlFor="formGroupExampleInput"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  required
                  value={this.props.clientdetails.contactNumber}
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
                  value={this.props.clientdetails.skypeId}
                  onChange={e => this.setState({ skypeId: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group required">
                <label
                  className="control-label"
                  htmlFor="formGroupExampleInput"
                >
                  sex
                </label>

                <select
                  required
                  className="form-control"
                  onChange={this.SetSexInState}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Occupation</label>
                <input
                  type="text"
                  value={this.props.clientdetails.Occupation}
                  onChange={e => this.setState({ Occupation: e.target.value })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Is Smoke</label>
                <input
                  type="checkbox"
                  value={this.props.clientdetails.isSmoke}
                  onChange={e => this.setState({ isSmoke: e.target.checked })}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Is Drugs</label>
                <input
                  type="checkbox"
                  value={this.props.clientdetails.isDrugs}
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
                  value={this.props.clientdetails.tendenciesToRemove}
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
                  value={this.props.clientdetails.symptomsAndSeverity}
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
                  value={this.props.clientdetails.medicalReport}
                  onChange={e =>
                    this.setState({ medicalReport: e.target.value })
                  }
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <button className="btn btn-lg btn-success">Update</button>
          &nbsp;
          <input type="reset" className="btn btn-lg btn-danger" />
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default EditClientInfo;
