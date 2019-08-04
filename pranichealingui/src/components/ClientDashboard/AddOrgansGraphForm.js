import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GetValuesFromQueryString } from "../Util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddOrgansGraphForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oransChartPartOneId: "",
      clientId: "",
      Brain_left: "",
      Brain_right: "",
      BackHeadmChakra: "",
      Eyes_left: "",
      Eyes_right: "",
      Ears_left: "",
      Ears_right: "",
      Jawmchakra_left: "",
      Jawmchakra_right: "",
      ThroatmChakra: "",
      Heart: "",
      Breast_left: "",
      Breast_right: "",
      Lungs_left: "",
      Lungs_right: "",
      Liver: "",
      Stomach: "",
      Pancreas: "",
      graphReport: ""
    };
  }
  handleChange = value => {
    this.setState({ graphReport: value });
  };
  componentDidMount() {
    this.setState({ clientId: GetValuesFromQueryString("clinetId") });
  }
  onCompleteInsertion = () => {
    this.props.formCancelHandler();
  };
  SaveChakraForm = isView => {
    console.log(this.state);
    let readUrl = "";
    if (window.location.href.indexOf("berkeleypranichealing") > 0) {
      readUrl =
        "http://api.berkeleypranichealing.com/api/tblOrgansChartPartOne/Create.php";
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblOrgansChartPartOne/Create.php";
    }
    fetch(readUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*"
      },
      mode: "cors",
      body: JSON.stringify(this.state)
    })
      .then(response => {
        response.json().then(data => {
          console.log(response);
          let id = parseInt(data);
          if (id > 0) {
            if (isView) {
              let url =
                "http://" +
                window.location.host +
                "/GraphView?graphId=" +
                id +
                "&type=3";
              window.open(url, "_blank");
            }
            this.onCompleteInsertion();
          }
        });
      })
      .then(function(data) {
        if (data !== undefined) {
          toast.error("Error in application", {
            position: toast.POSITION.BOTTOM_LEFT
          });
        }
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <div className="container-fluid py-5 mt-5">
          <h3 className="card-subtitle text-center">
            {" "}
            Organs & Min.CH.-Part 1
          </h3>

          <div className="row mt-5">
            <div className="col-lg-12 col-sm-12">
              <h4>
                Organs & Min.CH.-Part 1(Please fill this form with Benchmark
                data)
              </h4>
              <form id="graphForm">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Brain left</label>
                  <input
                    type="text"
                    value={this.state.Brain_left}
                    onChange={e =>
                      this.setState({ Brain_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Brain right</label>
                  <input
                    type="text"
                    value={this.state.Brain_right}
                    onChange={e =>
                      this.setState({ Brain_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Back Head Chakra
                  </label>
                  <input
                    type="text"
                    value={this.state.BackHeadmChakra}
                    onChange={e =>
                      this.setState({ BackHeadmChakra: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Eyes Left</label>
                  <input
                    type="text"
                    value={this.state.Eyes_left}
                    onChange={e => this.setState({ Eyes_left: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Eyes Right</label>
                  <input
                    type="text"
                    value={this.state.Eyes_right}
                    onChange={e =>
                      this.setState({ Eyes_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Ears Left</label>
                  <input
                    type="text"
                    value={this.state.Ears_left}
                    onChange={e => this.setState({ Ears_left: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Ears Right</label>
                  <input
                    type="text"
                    value={this.state.Ears_right}
                    onChange={e =>
                      this.setState({ Ears_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Jaw Chakra Left</label>
                  <input
                    type="text"
                    value={this.state.Jawmchakra_left}
                    onChange={e =>
                      this.setState({ Jawmchakra_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Jaw Chakra Right
                  </label>
                  <input
                    type="text"
                    value={this.state.Jawmchakra_right}
                    onChange={e =>
                      this.setState({ Jawmchakra_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Throat Chakra</label>
                  <input
                    type="text"
                    value={this.state.ThroatmChakra}
                    onChange={e =>
                      this.setState({ ThroatmChakra: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Heart</label>
                  <input
                    type="text"
                    value={this.state.Heart}
                    onChange={e => this.setState({ Heart: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Breast Left</label>
                  <input
                    type="text"
                    value={this.state.Breast_left}
                    onChange={e =>
                      this.setState({ Breast_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Breast Right</label>
                  <input
                    type="text"
                    value={this.state.Breast_right}
                    onChange={e =>
                      this.setState({ Breast_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Lungs Left</label>
                  <input
                    type="text"
                    value={this.state.Lungs_left}
                    onChange={e =>
                      this.setState({ Lungs_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Lungs Right</label>
                  <input
                    type="text"
                    value={this.state.Lungs_right}
                    onChange={e =>
                      this.setState({ Lungs_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Liver</label>
                  <input
                    type="text"
                    value={this.state.Liver}
                    onChange={e => this.setState({ Liver: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Stomach</label>
                  <input
                    type="text"
                    value={this.state.Stomach}
                    onChange={e => this.setState({ Stomach: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Pancreas</label>
                  <input
                    type="text"
                    value={this.state.Pancreas}
                    onChange={e => this.setState({ Pancreas: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <h2>REPORT COMMENTS</h2>
                  <ReactQuill
                    theme="snow"
                    value={this.state.graphReport}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={e => this.SaveChakraForm(false)}
                    className="btn btn-primary btn-warning btn-lg btn-block"
                  >
                    Save Graph
                  </button>
                  <button
                    type="button"
                    onClick={e => this.SaveChakraForm(true)}
                    className="btn btn-secondary btn-success btn-lg btn-block"
                  >
                    Save and View Graph
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddOrgansGraphForm.propTypes = {
  formCancelHandler: PropTypes.func.isRequired
};

export default AddOrgansGraphForm;
