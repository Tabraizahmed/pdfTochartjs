import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import FileBase64 from "react-file-base64";

class AddClientInfo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      // Address fields
      street: "",
      AptNo: "",
      city: "",
      state: " ",
      zipCode: "",
      email: "",
      contactNumber: "",
      Age: "",
      // new health tendencies fields
      isBloodPressure: true,
      isPregent: true,
      isDrugs: false,
      drugsDetails: "",
      isContagiousDisease: false,
      contagiousDiseaseDetails: "",
      ispsychologicalDisorder: false,
      psychologicalDisorderDetails: "",
      isSeriousInjury: false,
      seriousInjuryDetails: "",
      // Comments section
      purposeOfVisit: "",
      clientCommentsAfterExamination: "",
      // form footer
      clientSignature: "",
      formDate: "",

      country: "",
      skypeId: "",
      dateOfBirth: "",
      sex: "",
      martialStaus: "",
      Occupation: "",
      imageUrl: "",

      isSmoke: false,
      isAlcohol: false,

      meditationOrSpiritualPractice: "",
      tendenciesToRemove: "",
      typeOfAilment: "",
      symptomsAndSeverity: "",
      since: "",
      isAilmentInherited: false,
      medicalReport: "",
      medicineUse: ""
    };
  }
  onCancelAddClientForm = () => {
    this.props.cancelClickHandler();
  };
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

  CalculateAge = e => {
    var today = new Date();
    var birthDate = new Date(e.target.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
    }

    this.setState({ Age: age });
  };
  SaveClientInfoOnSubmit = e => {
    e.preventDefault();

    let readUrl = "";
    if (window.location.href.indexOf("berkeleypranichealing") > 0) {
      readUrl = "http://api.berkeleypranichealing.com/api/tblClient/Create.php";
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
        <h3 className="text-uppercase text-center">&reg; session record</h3>
        <h4 className="text-center text-uppercase">Client Form</h4>
        <div className="row">
          <div className="col-12 form-small-banner text-uppercase text-light">
            <p />
            <p className=" align-self-center justify-content-center">
              to help us serve you better, please fill out the form below
            </p>
          </div>
        </div>
        {/* Form header end */}
        <form onSubmit={this.SaveClientInfoOnSubmit}>
          <div className="row mt-3">
            <div className="col-md-1 p-0 mt-4 text-left">
              <label className="font-weight-bold">Client Name:</label>
            </div>
            <div className="col-md-4 p-0">
              <input
                type="text"
                required
                value={this.state.firstName}
                onChange={e => this.setState({ firstName: e.target.value })}
                className="form-control text-box-client-form"
              />

              <small>First Name</small>
            </div>
            <div className="col-md-3 p-0">
              <input
                required
                type="text"
                value={this.state.lastName}
                onChange={e => this.setState({ lastName: e.target.value })}
                className="form-control  text-box-client-form"
              />
              <small>Last Name</small>
            </div>
            <div className="col-md-1 mt-4 text-center">
              <label className="font-weight-bold">Date</label>
            </div>
            <div className="col-md-3 p-0">
              <input
                type="Date"
                required
                onBlur={this.CalculateAge}
                value={this.state.dateOfBirth}
                onChange={e => this.setState({ dateOfBirth: e.target.value })}
                className="form-control  text-box-client-form"
              />
              <small>Date:</small>
            </div>
          </div>
          {/* Address row startes */}

          <div className="row">
            <div className="col-md-1 p-0 mt-4 text-left">
              <label className="font-weight-bold">Address:</label>
            </div>
            <div className="col-md-2 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                required
                value={this.state.street}
                onChange={e => this.setState({ street: e.target.value })}
              />
              <small>street</small>
            </div>
            <div className="col-md-2 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                required
                value={this.state.AptNo}
                onChange={e => this.setState({ AptNo: e.target.value })}
              />
              <small>Apt#</small>
            </div>
            <div className="col-md-2 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                required
                value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}
              />
              <small>city</small>
            </div>
            <div className="col-md-2 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                required
                value={this.state.state}
                onChange={e => this.setState({ state: e.target.value })}
              />
              <small>state</small>
            </div>
            <div className="col-md-3 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                required
                value={this.state.zipCode}
                onChange={e => this.setState({ zipCode: e.target.value })}
              />
              <small>zip code</small>
            </div>
          </div>
          {/* Telephone row */}

          <div className="row">
            <div className="col-md-1 p-0 text-left mt-4">
              <label className="font-weight-bold">Telephone:</label>
            </div>
            <div className="col-md-6 p-0">
              <input
                type="text"
                required
                value={this.state.contactNumber}
                onChange={e => this.setState({ contactNumber: e.target.value })}
                className="form-control text-box-client-form"
              />
              <small>contact number</small>
            </div>
            <div className="col-md-1 p-0 text-center mt-4">
              <label className="font-weight-bold">Age:</label>
            </div>
            <div className="col-md-4 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                required
                value={this.state.Age}
                onChange={e => this.setState({ Age: e.target.value })}
              />
              <small>Age</small>
            </div>
          </div>

          {/* Email */}

          <div className="row">
            <div className="col-md-1 p-0 text-left mt-4">
              <label className="font-weight-bold">Email:</label>
            </div>
            <div className="col-md-11 p-0">
              <input
                value={this.state.email}
                required
                onChange={e => this.setState({ email: e.target.value })}
                type="email"
                className="form-control text-box-client-form"
              />
              <small>Email</small>
            </div>
          </div>

          {/* Circle what is appropiate */}

          <div className="row mt-4">
            <div className="col-12 form-small-banner text-uppercase text-light">
              <p />
              <p className=" align-self-center justify-content-center">
                circle what is appropriate
              </p>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-6 border-dark border-left-0 border-top-0 border-bottom-0">
              1. Do you smoke?
              <span className="ml-5 float-right">
                <div className="form-check form-check-inline">
                  <input
                    name="issmoke"
                    type="radio"
                    value={this.state.isSmoke}
                    onChange={e => this.setState({ isSmoke: true })}
                    className="form-check-input"
                  />

                  <label className="form-check-label" htmlFor="isSmoke">
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    value={this.state.isSmoke}
                    onChange={e => this.setState({ isSmoke: false })}
                    className="form-check-input"
                    name="issmoke"
                  />

                  <label className="form-check-label" htmlFor="isSmoke">
                    No
                  </label>
                </div>
              </span>
              <br />
              2. Do you drink alcoholic beverages?
              <span className="float-right">
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    value={this.state.isAlcohol}
                    onChange={e => this.setState({ isAlcohol: true })}
                    className="form-check-input"
                    name="isalcholic"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    value={this.state.isAlcohol}
                    onChange={e => this.setState({ isAlcohol: false })}
                    className="form-check-input"
                    name="isalcholic"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    No
                  </label>
                </div>
              </span>
            </div>
            <div className="col-md-6 border border-dark border-right-0 border-top-0 border-bottom-0">
              3. Do you have high blood pressure?
              <span className="float-right">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.isBloodPressure}
                    onChange={e => this.setState({ isBloodPressure: true })}
                    name="isbp"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.isBloodPressure}
                    onChange={e => this.setState({ isBloodPressure: false })}
                    name="isbp"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    No
                  </label>
                </div>
              </span>
              <br />
              4. Are you pregnant or trying to get pregnant?
              <span className="float-right">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.isPregent}
                    onChange={e => this.setState({ isPregent: true })}
                    name="isPregent"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.isPregent}
                    onChange={e => this.setState({ isPregent: false })}
                    name="isPregent"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    No
                  </label>
                </div>
              </span>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-md-12">
              5. Do you take any prescribed drugs/medications?
              <span className="ml-3 float-right">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.isDrugs}
                    onChange={e => this.setState({ isDrugs: true })}
                    name="isDrugs"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.isDrugs}
                    onChange={e => this.setState({ isDrugs: false })}
                    name="isDrugs"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    No
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  If Yes, Specifiy: &nbsp;
                  <input
                    type="text"
                    maxLength="450"
                    value={this.state.drugsDetails}
                    onChange={e =>
                      this.setState({ drugsDetails: e.target.value })
                    }
                    className="text-box-client-form"
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              6. Do you have history of contagious disease?
              <span className="ml-3 float-right">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.isContagiousDisease}
                    onChange={e => this.setState({ isContagiousDisease: true })}
                    name="isContagiousDisease"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.isContagiousDisease}
                    onChange={e =>
                      this.setState({ isContagiousDisease: false })
                    }
                    name="isContagiousDisease"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    No
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  If Yes, Specifiy: &nbsp;
                  <input
                    type="text"
                    className="text-box-client-form"
                    maxLength="450"
                    value={this.state.contagiousDiseaseDetails}
                    onChange={e =>
                      this.setState({
                        contagiousDiseaseDetails: e.target.value
                      })
                    }
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              7. Do you have history of psychological disorder?
              <span className="ml-3 float-right">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.ispsychologicalDisorder}
                    onChange={e =>
                      this.setState({ ispsychologicalDisorder: true })
                    }
                    name="ispsychologicalDisorder"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.ispsychologicalDisorder}
                    onChange={e =>
                      this.setState({ ispsychologicalDisorder: false })
                    }
                    name="ispsychologicalDisorder"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    No
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  If Yes, Specifiy: &nbsp;
                  <input
                    type="text"
                    className="text-box-client-form"
                    maxLength="450"
                    value={this.state.psychologicalDisorderDetails}
                    onChange={e =>
                      this.setState({
                        psychologicalDisorderDetails: e.target.value
                      })
                    }
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              8. Do you have history of serious physical injury?
              <span className="ml-3 float-right">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.isSeriousInjury}
                    onChange={e => this.setState({ isSeriousInjury: true })}
                    name="isSeriousInjury"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value={this.state.isSeriousInjury}
                    onChange={e => this.setState({ isSeriousInjury: false })}
                    name="isSeriousInjury"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    No
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  If Yes, Specifiy: &nbsp;
                  <input
                    type="text"
                    className="text-box-client-form"
                    maxLength="450"
                    value={this.state.seriousInjuryDetails}
                    onChange={e =>
                      this.setState({ seriousInjuryDetails: e.target.value })
                    }
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 form-small-banner text-uppercase text-light">
              <p />
              <p className=" align-self-center justify-content-center">
                Purpose of visit (Symptoms, complaints, problems):
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <p>
                Rate your pain/Discomfort Now: (scale of 0 to 10): 0 = No Pain 5
                = Moderate Paint 10 = Unbearable:
                <input type="text" className="text-box-client-form" />
              </p>
              <p />
              Other Comments or Symptoms:
              <textarea
                className="form-control"
                maxLength="450"
                value={this.state.purposeOfVisit}
                onChange={e =>
                  this.setState({ purposeOfVisit: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 form-small-banner text-uppercase text-light">
              <p />
              <p className=" align-self-center justify-content-center">
                Clients Comments after the Session:
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <p>
                Rate your pain/Discomfort Now: (scale of 0 to 10): 0 = No Pain 5
                = Moderate Paint 10 = Unbearable:
                <input type="text" className="text-box-client-form" />
              </p>
              Other Comments or Symptoms:
              <textarea
                className="form-control"
                maxLength="450"
                value={this.state.clientCommentsAfterExamination}
                onChange={e =>
                  this.setState({
                    clientCommentsAfterExamination: e.target.value
                  })
                }
              />
              <p className="mt-3">
                I understand that Pranic Healing &reg; is not meant to replace
                conventional medicine but rather to complement and enhance it.
                If symptoms persist, a medical professional is to be consulted.
                I hereby release the persons(s) providing the pranic healing
                session and the U.S Pranic healing &reg; center from any
                liabliity as a result of the services and sessions I have
                received. I understand that this session record will be held
                confidential and may only be reviewed by the U.S Pranic Healer
                Certification Board for the purpose of the Pranic Healer
                Certification Program
              </p>
              <p />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 p-0 text-left mt-4 ml-1">
              <label className="font-weight-bold">Client Signatures:</label>
            </div>
            <div className="col-md-4 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                maxLength="12"
                required
                value={this.state.clientSignature}
                onChange={e =>
                  this.setState({
                    clientSignature: e.target.value
                  })
                }
              />
            </div>
            <div className="col-md-1 p-0 text-left mt-4 ml-2">
              <label className="font-weight-bold">Date:</label>
            </div>
            <div className="col-md-2 p-0">
              <input
                type="datetime-local"
                required
                value={this.state.formDate}
                onChange={e =>
                  this.setState({
                    formDate: e.target.value
                  })
                }
                className="form-control text-box-client-form"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 text-center">
              <button className="btn btn-success btn-lg ">Submit</button>
            </div>
            <div className="col-md-6 text-center">
              <input
                type="reset"
                value="Cancel"
                onClick={this.onCancelAddClientForm}
                className="btn btn-lg btn-danger"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
AddClientInfo.propTypes = {
  cancelClickHandler: PropTypes.func.isRequired
};
export default AddClientInfo;
