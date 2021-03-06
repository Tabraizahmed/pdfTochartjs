import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GetValuesFromQueryString, GetApiUrlByType, UrlTypes } from "../Util";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadGraphView, ExceptionHandler } from "../MethodsUtil";

class AddPsychologicalFormPartOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PsychologicalParametersId: "",
      clientId: "",
      Dynamism: "",
      Abilitytoattractmoney: "",
      Productivity: "",
      SexualDrive: "",
      PhysicalViolence: "",
      SixthSense: "",
      Depression: "",
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
  SavePsychologicalGraphPartOne = isView => {
    let readUrl = GetApiUrlByType(UrlTypes.ADDPSYCHOLOGICALPARTONE);
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
          if (isView) {
            LoadGraphView(data, 0);
          }
          this.onCompleteInsertion();
        });
      })
      .then(function(data) {
        ExceptionHandler(data);
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <ToastContainer />
        <div className="container-fluid py-5 mt-5">
          <h3 className="card-subtitle text-center">
            Psychological Graph part one
          </h3>
          <div className="row mt-5">
            <div className="col-lg-12 col-sm-12">
              <h4>
                Psychological Graph part one(Please fill this form with
                Benchmark data)
              </h4>
              <form id="graphForm">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Dynamism</label>
                  <input
                    type="text"
                    value={this.state.Dynamism}
                    onChange={e => this.setState({ Dynamism: e.target.value })}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Ability to attract money
                  </label>
                  <input
                    type="text"
                    value={this.state.Abilitytoattractmoney}
                    onChange={e =>
                      this.setState({ Abilitytoattractmoney: e.target.value })
                    }
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Productivity</label>
                  <input
                    type="text"
                    value={this.state.Productivity}
                    onChange={e =>
                      this.setState({ Productivity: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">SexualDrive</label>
                  <input
                    type="text"
                    value={this.state.SexualDrive}
                    onChange={e =>
                      this.setState({ SexualDrive: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Physical Violence
                  </label>
                  <input
                    type="text"
                    value={this.state.PhysicalViolence}
                    onChange={e =>
                      this.setState({ PhysicalViolence: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Sixth Sense</label>
                  <input
                    type="text"
                    value={this.state.SixthSense}
                    onChange={e =>
                      this.setState({ SixthSense: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Depression</label>
                  <input
                    type="text"
                    value={this.state.Depression}
                    onChange={e =>
                      this.setState({ Depression: e.target.value })
                    }
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
                    onClick={e => this.SavePsychologicalGraphPartOne(false)}
                    className="btn btn-primary btn-warning btn-lg btn-block"
                  >
                    Save Graph
                  </button>
                  <button
                    type="button"
                    onClick={e => this.SavePsychologicalGraphPartOne(true)}
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
AddPsychologicalFormPartOne.propTypes = {
  formCancelHandler: PropTypes.func.isRequired
};
export default AddPsychologicalFormPartOne;
