import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EditClientInfo extends Component {
  constructor(props) {
    super(props);
    console.log(props);

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
      isBloodPressure: false,
      isPregrent: false,
      isDrugs: false,
      Iscontagiousdisease: false,
      isphysicalinjury: false,
      IspsychologicalDisorder: false,
      meditationOrSpiritualPractice: "",
      tendenciesToRemove: "",
      typeOfAilment: "",
      symptomsAndSeverity: "",
      since: "",
      isAilmentInherited: false,
      medicalReport: "",
      medicineUse: "",
      purposeOfVisit: "",
      ClientCommentsAfterVisit: ""
    };

    // Create refs
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.dateOfBirthInput = React.createRef();
    this.street = React.createRef();
    this.AptNo = React.createRef();
    this.city = React.createRef();
    this.state = React.createRef();
    this.zipCode = React.createRef();

    this.telephone = React.createRef();
    this.contactNumber = React.createRef();
    this.Age = React.createRef();
    this.email = React.createRef();

    this.isSmoke = React.createRef();
    this.isAlcohol = React.createRef();
    this.isBloodPressure = React.createRef();
    this.isPregent = React.createRef();

    this.isDrugs = React.createRef();
    this.DrugsDetails = React.createRef();

    this.isContagiousDisease = React.createRef();
    this.contagiousDiseaseDetails = React.createRef();

    this.ispsychologicalDisorder = React.createRef();
    this.psychologicalDisorderDetails = React.createRef();

    this.isSeriousInjury = React.createRef();
    this.seriousInjuryDetails = React.createRef();

    this.purposeOfVisit = React.createRef();
    this.clientCommentsAfterExamination = React.createRef();

    this.clientSignature = React.createRef();
    this.formDate = React.createRef();
  }
  componentDidMount() {
    this.setState({
      isSmoke: this.props.clientdetails.isSmoke,
      isAlcohol: this.props.clientdetails.isAlcohol,
      isBloodPressure: this.props.clientdetails.IsBloodPressure,

      isPregrent: this.props.clientdetails.isPregrent,
      isDrugs: this.props.clientdetails.isDrugs,
      Iscontagiousdisease: this.props.clientdetails.Iscontagiousdisease,
      IspsychologicalDisorder: this.props.clientdetails.IspsychologicalDisorder,

      isphysicalinjury: this.props.clientdetails.isphysicalinjury
    });
  }

  OnupdateClient = e => {
    e.preventDefault();
    const updateClient = {
      clientId: this.props.clientdetails.id,
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,

      dateOfBirth: this.dateOfBirthInput.current.value,
      street: this.street.current.value,
      AptNo: this.AptNo.current.value,
      city: this.city.current.value,

      state: this.state.current.value,
      zipCode: this.zipCode.current.value,
      telephone: this.telephone.current.value,

      Age: this.Age.current.value,
      email: this.email.current.value,

      isSmoke: this.state.isSmoke,
      isAlcohol: this.state.isAlcohol,
      isBloodPressure: this.state.isBloodPressure,
      isPregent: this.state.isPregrent,

      isDrugs: this.state.isDrugs,
      DrugsDetails: this.DrugsDetails.current.value,
      isContagiousDisease: this.state.Iscontagiousdisease,
      contagiousDiseaseDetails: this.contagiousDiseaseDetails.current.value,
      ispsychologicalDisorder: this.state.IspsychologicalDisorder,

      psychologicalDisorderDetails: this.psychologicalDisorderDetails.current
        .value,
      isSeriousInjury: this.state.isphysicalinjury,
      seriousInjuryDetails: this.seriousInjuryDetails.current.value,

      purposeOfVisit: this.purposeOfVisit.current.value,
      clientCommentsAfterExamination: this.clientCommentsAfterExamination
        .current.value,

      clientSignature: this.clientSignature.current.value,
      formDate: this.formDate.current.value
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
        // setTimeout(function() {
        //   window.location.reload();
        // }, 3000);
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
        <form onSubmit={this.OnupdateClient}>
          <div className="row mt-3">
            <div className="col-md-1 p-0 mt-4 text-left">
              <label className="font-weight-bold">Client Name:</label>
            </div>
            <div className="col-md-4 p-0">
              <input
                type="text"
                required
                ref={this.firstNameInput}
                defaultValue={this.props.clientdetails.firstName}
                className="form-control text-box-client-form"
              />

              <small>First Name</small>
            </div>
            <div className="col-md-3 p-0">
              <input
                required
                type="text"
                defaultValue={this.props.clientdetails.lastName}
                ref={this.lastNameInput}
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
                defaultValue={this.props.clientdetails.dateOfBirthInput}
                ref={this.dateOfBirthInput}
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
                defaultValue={this.props.clientdetails.street}
                ref={this.street}
              />
              <small>street</small>
            </div>
            <div className="col-md-2 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                required
                defaultValue={this.props.clientdetails.aptno}
                ref={this.AptNo}
              />
              <small>Apt#</small>
            </div>
            <div className="col-md-2 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                required
                defaultValue={this.props.clientdetails.city}
                ref={this.city}
              />
              <small>city</small>
            </div>
            <div className="col-md-2 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                required
                defaultValue={this.props.clientdetails.state}
                ref={this.state}
              />
              <small>state</small>
            </div>
            <div className="col-md-3 p-0">
              <input
                type="text"
                className="form-control text-box-client-form"
                required
                defaultValue={this.props.clientdetails.zipcode}
                ref={this.zipCode}
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
                defaultValue={this.props.clientdetails.contactNumber}
                ref={this.telephone}
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
                defaultValue={this.props.clientdetails.Age}
                ref={this.Age}
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
                ref={this.email}
                defaultValue={this.props.clientdetails.email}
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
                    checked={this.state.isSmoke === "1"}
                    onChange={e => this.setState({ isSmoke: "1" })}
                    value="1"
                    className="form-check-input"
                  />

                  <label className="form-check-label" htmlFor="isSmoke">
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    name="issmoke"
                    type="radio"
                    checked={this.state.isSmoke === "0"}
                    onChange={e => this.setState({ isSmoke: "0" })}
                    value="0"
                    className="form-check-input"
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
                    checked={this.state.isAlcohol === "1"}
                    onChange={e => this.setState({ isAlcohol: "1" })}
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
                    checked={this.state.isAlcohol === "0"}
                    onChange={e => this.setState({ isAlcohol: "0" })}
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
                    checked={this.state.isBloodPressure === "1"}
                    onChange={e => this.setState({ isBloodPressure: "1" })}
                    name="isbp"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={this.state.isBloodPressure === "0"}
                    onChange={e => this.setState({ isBloodPressure: "0" })}
                    name="isbp"
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
                    checked={this.state.isPregrent === "1"}
                    onChange={e => this.setState({ isPregrent: "1" })}
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
                    checked={this.state.isPregrent === "0"}
                    onChange={e => this.setState({ isPregrent: "0" })}
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
                    checked={this.state.isDrugs === "1"}
                    onChange={e => this.setState({ isDrugs: "1" })}
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
                    checked={this.state.isDrugs === "0"}
                    onChange={e => this.setState({ isDrugs: "0" })}
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
                    ref={this.DrugsDetails}
                    defaultValue={
                      this.props.clientdetails.DrugsMedicationsdetails
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
                    checked={this.state.Iscontagiousdisease === "1"}
                    onChange={e => this.setState({ Iscontagiousdisease: "1" })}
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
                    checked={this.state.Iscontagiousdisease === "0"}
                    onChange={e => this.setState({ Iscontagiousdisease: "0" })}
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
                    defaultValue={
                      this.props.clientdetails.contagiousdisease_details
                    }
                    ref={this.contagiousDiseaseDetails}
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
                    checked={this.state.IspsychologicalDisorder === "1"}
                    onChange={e =>
                      this.setState({ IspsychologicalDisorder: "1" })
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
                    checked={this.state.IspsychologicalDisorder === "0"}
                    onChange={e =>
                      this.setState({ IspsychologicalDisorder: "0" })
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
                    defaultValue={
                      this.props.clientdetails.psychological_disorder_detail
                    }
                    ref={this.psychologicalDisorderDetails}
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
                    checked={this.state.isphysicalinjury === "1"}
                    onChange={e => this.setState({ isphysicalinjury: "1" })}
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
                    checked={this.state.isphysicalinjury === "0"}
                    onChange={e => this.setState({ isphysicalinjury: "0" })}
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
                    defaultValue={
                      this.props.clientdetails.physicalinjury_details
                    }
                    ref={this.seriousInjuryDetails}
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
                defaultValue={this.props.clientdetails.purposeOfVisit}
                ref={this.purposeOfVisit}
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
                defaultValue={this.props.clientdetails.ClientCommentsAfterVisit}
                ref={this.clientCommentsAfterExamination}
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
                defaultValue={this.props.clientdetails.clientSignature}
                ref={this.clientSignature}
              />
            </div>
            <div className="col-md-1 p-0 text-left mt-4 ml-2">
              <label className="font-weight-bold">Date:</label>
            </div>
            <div className="col-md-2 p-0">
              <input
                type="date"
                defaultValue={this.props.clientdetails.formDate}
                ref={this.formDate}
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
                className="btn btn-lg btn-danger"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditClientInfo;
