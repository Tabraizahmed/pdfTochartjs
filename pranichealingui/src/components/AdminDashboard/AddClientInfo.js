import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileBase64 from "react-file-base64";

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
      sex: "male",
      martialStaus: "",
      Occupation: "",
      imageUrl: "",

      isSmoke: false,
      isAlcohol: false,
      isDrugs: false,
      meditationOrSpiritualPractice: "",
      tendenciesToRemove: "",
      typeOfAilment: "",
      symptomsAndSeverity: "",
      since: "1970-01-01",
      isAilmentInherited: false,
      medicalReport: "",
      medicineUse: ""
    };
  }
  // Callback~
  getFiles(files) {
    if (files.file.size > 50000) {
      toast.error("File size should be less than 500 kb");
      return;
    }

    this.setState({ imageUrl: files.base64 });
  }
  // set sex in state
  SetSexInState = e => {
    console.log(e.target.value);
    this.setState({ sex: e.target.value });
  };
  SaveClientInfoOnSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let readUrl = "";
    if (window.location.href.indexOf("localhost:5511") > 0) {
      readUrl =
        "http://localhost:5511/pranichealingApi/api/tblClient/Create.php";
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblclient/Create.php";
    }

    fetch(readUrl, {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        toast.success(
          "New Cient has been created, Page is going to be refreshed"
        );
        // setTimeout(function() {
        //   window.location.reload();
        // }, 3000);
      })
      .then(function(data) {
        debugger;
        if (data !== undefined) {
          toast.error("There is error in application. Please try later");
        }
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.SaveClientInfoOnSubmit}>
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
                  value={this.state.firstName}
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
                  value={this.state.email}
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
                  value={this.state.country}
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
                  value={this.state.dateOfBirth}
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
                  value={this.state.martialStaus}
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
                  value={this.state.lastName}
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
                  value={this.state.skypeId}
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
        <ToastContainer />
      </div>
    );
  }
}

export default AddClientInfo;
