import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileBase64 from "react-file-base64";

class EditClientInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "",
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

      isSmoke: false,
      isAlcohol: false,
      isDrugs: false,
      meditationOrSpiritualPractice: "",
      tendenciesToRemove: "",
      typeOfAilment: "",
      symptomsAndSeverity: "",
      since: "",
      isAilmentInherited: false,
      medicalReport: "",
      medicineUse: ""
    };

    // Create refs
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.countryInput = React.createRef();
    this.contactNumberInput = React.createRef();
    this.dateOfBirthInput = React.createRef();

    this.martialStausInput = React.createRef();

    this.isAlcoholInput = React.createRef();

    this.meditationOrSpiritualPracticeInput = React.createRef();
    this.typeOfAilmentInput = React.createRef();
    this.sinceInput = React.createRef();
    this.medicineUseInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.contactNumberInput = React.createRef();
    this.skypeIdInput = React.createRef();
    this.OccupationInput = React.createRef();

    this.isSmokeInput = React.createRef();
    this.isDrugsInput = React.createRef();
    this.tendenciesToRemoveInput = React.createRef();
    this.symptomsAndSeverityInput = React.createRef();
    this.medicalReportInput = React.createRef();

    this.sexInput = React.createRef();
    this.imageInput = React.createRef();
  }

  getFiles(files) {
    if (files.file.size > 50000) {
      toast.error("File size should be less than 500 kb");
      return;
    }
    this.setState({ imageUrl: files.base64 });
  }
  onChange = e => {
    this.props.clientdetails.firstName = e.target.defaultValue;
  };
  OnupdateClient = e => {
    e.preventDefault();
    const updateClient = {
      clientId: this.props.clientdetails.id,
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      contactNumber: this.contactNumberInput.current.value,
      country: this.countryInput.current.value,
      skypeId: this.skypeIdInput.current.value,
      dateOfBirth: this.dateOfBirthInput.current.value,
      sex: this.sexInput.current.value,
      martialStaus: this.martialStausInput.current.value,
      Occupation: this.OccupationInput.current.value,
      imageUrl: this.state.imageUrl,
      isSmoke: this.isSmokeInput.current.value,
      isAlcohol: this.isAlcoholInput.current.value,
      isDrugs: this.isDrugsInput.current.value,
      meditationOrSpiritualPractice: this.meditationOrSpiritualPracticeInput
        .current.value,
      tendenciesToRemove: this.tendenciesToRemoveInput.current.value,
      typeOfAilment: this.typeOfAilmentInput.current.value,
      symptomsAndSeverity: this.symptomsAndSeverityInput.current.value,
      since: this.sinceInput.current.value,
      // isAilmentInherited: this.isAilmentInheritedInput.current.value,
      medicalReport: this.medicalReportInput.current.value,
      medicineUse: this.medicineUseInput.current.value
    };

    console.log(updateClient);
    // send this object to api to update
    let readUrl = "";
    if (window.location.href.indexOf("localhost:5511") > 0) {
      readUrl =
        "http://localhost:5511/pranichealingApi/api/tblClient/update.php";
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblclient/update.php";
    }

    fetch(readUrl, {
      mode: "no-cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(updateClient)
    })
      .then(Response => {
        toast.success(
          "New Cient has been updated, Page is going to be refreshed"
        );
        setTimeout(function() {
          window.location.reload();
        }, 3000);
      })
      .then(function(data) {
        if (data !== undefined) {
          toast.error("There is error in application. Please try later");
        }
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.OnupdateClient}>
          <h3>Edit client</h3>
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
                  ref={this.firstNameInput}
                  defaultValue={this.props.clientdetails.firstName}
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
                  defaultValue={this.props.clientdetails.email}
                  ref={this.emailInput}
                  required
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
                  defaultValue={this.props.clientdetails.country}
                  ref={this.countryInput}
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
                  defaultValue={this.props.clientdetails.dateOfBirth}
                  ref={this.dateOfBirthInput}
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
                  defaultValue={this.props.clientdetails.martialStaus}
                  ref={this.martialStausInput}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Existing Image</label>
                <img
                  src={this.props.clientdetails.imageUrl}
                  alt="client existing"
                  width="50"
                  height="50"
                />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Upload new Image</label>
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
                  defaultValue={this.props.clientdetails.isAlcohol}
                  ref={this.isAlcoholInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">
                  MeditationOr Spiritual Practice
                </label>
                <input
                  type="checkbox"
                  defaultValue={
                    this.props.clientdetails.meditationOrSpiritualPractice
                  }
                  ref={this.meditationOrSpiritualPracticeInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Type Of Ailment</label>
                <input
                  type="text"
                  defaultValue={this.props.clientdetails.typeOfAilment || ""}
                  ref={this.typeOfAilmentInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Since</label>
                <input
                  type="date"
                  defaultValue={this.props.clientdetails.since}
                  ref={this.sinceInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Medicine Use</label>
                <input
                  type="text"
                  defaultValue={this.props.clientdetails.medicineUse}
                  ref={this.medicineUseInput}
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
                  defaultValue={this.props.clientdetails.lastName}
                  ref={this.lastNameInput}
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
                  defaultValue={this.props.clientdetails.contactNumber}
                  ref={this.contactNumberInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">skypeId</label>
                <input
                  type="text"
                  defaultValue={this.props.clientdetails.skypeId}
                  ref={this.skypeIdInput}
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
                  defaultValue={this.props.clientdetails.sex}
                  ref={this.sexInput}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Occupation</label>
                <input
                  type="text"
                  defaultValue={this.props.clientdetails.Occupation}
                  ref={this.OccupationInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Is Smoke</label>
                <input
                  type="checkbox"
                  // checked={isSmoked}
                  defaultValue={this.props.clientdetails.isSmoke}
                  ref={this.isSmokeInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Is Drugs</label>
                <input
                  type="checkbox"
                  defaultValue={this.props.clientdetails.isDrugs}
                  ref={this.isDrugsInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">
                  Tendencies To Remove
                </label>
                <input
                  type="text"
                  defaultValue={this.props.clientdetails.tendenciesToRemove}
                  ref={this.tendenciesToRemoveInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">
                  Symptoms And Severity
                </label>
                <input
                  type="text"
                  defaultValue={this.props.clientdetails.symptomsAndSeverity}
                  ref={this.symptomsAndSeverityInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Medical Report</label>
                <input
                  type="text"
                  defaultValue={this.props.clientdetails.medicalReport}
                  ref={this.medicalReportInput}
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
