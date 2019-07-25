import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GetValuesFromQueryString } from "../Util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ChakraGraphForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientId: "",
      CrownChakra: "",
      ForeheadChakra: "",
      AjnaChakra: "",
      ThroatChakra: "",
      HeartChakra_front: "",
      HeartChakra_back: "",
      SolarPlexCharka_front: "",
      SolarPlexCharka_back: "",
      SpleenChakra_front: "",
      SpleenChakra_back: "",
      MengMeinChakra: "",
      SexChakra: "",
      BasicChakra: "",
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
  SaveChakraForm = () => {
    let readUrl = "";
    if (window.location.href.indexOf("berkeleypranichealing") > 0) {
      readUrl =
        "http://api.berkeleypranichealing.com/api/tblChakraGraph/Create.php";
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblChakraGraph/Create.php";
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
          <h3 className="card-subtitle text-center">Major chakras size</h3>

          <div className="row mt-5">
            <div className="col-lg-12 col-sm-12">
              <h4>Chakara Form (Please fill this form with Benchmark data)</h4>

              <form id="graphForm">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Crown Chakra</label>
                  <input
                    type="text"
                    value={this.state.CrownChakra}
                    onChange={e =>
                      this.setState({ CrownChakra: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Forehead Chakra
                  </label>
                  <input
                    type="text"
                    value={this.state.ForeheadChakra}
                    onChange={e =>
                      this.setState({ ForeheadChakra: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Ajna Chakra</label>
                  <input
                    type="text"
                    value={this.state.AjnaChakra}
                    onChange={e =>
                      this.setState({ AjnaChakra: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Throat Chakra</label>
                  <input
                    type="text"
                    value={this.state.ThroatChakra}
                    onChange={e =>
                      this.setState({ ThroatChakra: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Heart Chakra (Front)
                  </label>
                  <input
                    type="text"
                    value={this.state.HeartChakra_front}
                    onChange={e =>
                      this.setState({ HeartChakra_front: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Heart Chakra (Back)
                  </label>
                  <input
                    type="text"
                    value={this.state.HeartChakra_back}
                    onChange={e =>
                      this.setState({ HeartChakra_back: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Solar Plex Charka (Front)
                  </label>
                  <input
                    type="text"
                    value={this.state.SolarPlexCharka_front}
                    onChange={e =>
                      this.setState({ SolarPlexCharka_front: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Solar Plex Charka (Back)
                  </label>
                  <input
                    type="text"
                    value={this.state.SolarPlexCharka_back}
                    onChange={e =>
                      this.setState({ SolarPlexCharka_back: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Spleen Chakra (Front)
                  </label>
                  <input
                    type="text"
                    value={this.state.SpleenChakra_front}
                    onChange={e =>
                      this.setState({ SpleenChakra_front: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Spleen Chakra (Back)
                  </label>
                  <input
                    type="text"
                    value={this.state.SpleenChakra_back}
                    onChange={e =>
                      this.setState({ SpleenChakra_back: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Meng Mein Chakra
                  </label>
                  <input
                    type="text"
                    value={this.state.MengMeinChakra}
                    onChange={e =>
                      this.setState({ MengMeinChakra: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Sex Chakra </label>
                  <input
                    type="text"
                    value={this.state.SexChakra}
                    onChange={e => this.setState({ SexChakra: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Basic Chakra</label>
                  <input
                    type="text"
                    value={this.state.BasicChakra}
                    onChange={e =>
                      this.setState({ BasicChakra: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
              </form>
            </div>

            <div className="col-lg-12 col-sm-6">
              <h2>REPORT COMMENTS</h2>
              <ReactQuill
                theme="snow"
                value={this.state.graphReport}
                onChange={this.handleChange}
              />
              <div className="mt-2">
                <button
                  type="button"
                  onClick={this.SaveChakraForm}
                  className="btn btn-primary btn-warning btn-lg btn-block"
                >
                  Save Graph
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-success btn-lg btn-block"
                >
                  Save and View Graph
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChakraGraphForm.propTypes = {
  formCancelHandler: PropTypes.func.isRequired
};

export default ChakraGraphForm;
