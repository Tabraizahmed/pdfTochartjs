import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GetValuesFromQueryString, GetApiUrlByType, UrlTypes } from "../Util";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadGraphView, ExceptionHandler } from "../MethodsUtil";

export default class AddPsychologicalFormPartTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PsychologicalParametersPart2Id: "",
      clientId: "",
      ChakraStress: "",
      ChakraAnger: "",
      ChakraFear_phobia: "",
      ChakraCourage: "",
      ChakraPerseverance: "",
      ChakraObession: "",
      ChakraSelf_Confidence: "",
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
  SavePsychologicalGraphPartTwo = isView => {
    let readUrl = GetApiUrlByType(UrlTypes.ADDPSYCHOLOGICALPARTTWO);
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
            Psychological Graph part Two
          </h3>
          <div className="row mt-5">
            <div className="col-lg-12 col-sm-12">
              <h4>
                Psychological Graph part two(Please fill this form with
                Benchmark data)
              </h4>
              <form id="graphForm">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Chakra Stress</label>
                  <input
                    type="text"
                    value={this.state.ChakraStress}
                    onChange={e =>
                      this.setState({ ChakraStress: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Chakra Anger</label>
                  <input
                    type="text"
                    value={this.state.ChakraAnger}
                    onChange={e =>
                      this.setState({ ChakraAnger: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Chakra Fear phobia
                  </label>
                  <input
                    type="text"
                    value={this.state.ChakraFear_phobia}
                    onChange={e =>
                      this.setState({ ChakraFear_phobia: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Chakra Courage</label>
                  <input
                    type="text"
                    value={this.state.ChakraCourage}
                    onChange={e =>
                      this.setState({ ChakraCourage: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Chakra Perseverance
                  </label>
                  <input
                    type="text"
                    value={this.state.ChakraPerseverance}
                    onChange={e =>
                      this.setState({ ChakraPerseverance: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Chakra Obession</label>
                  <input
                    type="text"
                    value={this.state.ChakraObession}
                    onChange={e =>
                      this.setState({ ChakraObession: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Chakra Self Confidence
                  </label>
                  <input
                    type="text"
                    value={this.state.ChakraSelf_Confidence}
                    onChange={e =>
                      this.setState({ ChakraSelf_Confidence: e.target.value })
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
                    onClick={e => this.SavePsychologicalGraphPartTwo(false)}
                    className="btn btn-primary btn-warning btn-lg btn-block"
                  >
                    Save Graph
                  </button>
                  <button
                    type="button"
                    onClick={e => this.SavePsychologicalGraphPartTwo(true)}
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
