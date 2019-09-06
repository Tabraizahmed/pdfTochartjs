import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GetValuesFromQueryString } from "../Util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AddOrgansPartTwoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oransChartPartTwoId: "",
      clientId: "",
      LargeIntestine_left: "",
      Large_Intestine_right: "",
      Spieen_left: "",
      Kidneys_left: "",
      Kidneys_right: "",
      Prostate_M_Uterus_W: "",
      Bladder: "",
      Perineummchakra: "",
      Armpits_left: "",
      Armpits_right: "",
      Hands_left: "",
      Hands_right: "",
      Spine: "",
      HipsmChakra_left: "",
      HipsmChakra_right: "",
      Knees_right: "",
      Knees_left: "",
      Feet_left: "",
      Feet_right: "",
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
        "http://api.berkeleypranichealing.com/api/tblOrganChartPartTwo/Create.php";
    } else {
      readUrl =
        "http://localhost:5514/pdfTochartjs/pranichealingApi/api/tblOrganChartPartTwo/Create.php";
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
          <h3 className="card-subtitle text-center">Organs & Min.CH.-Part 2</h3>
          <div className="row mt-5">
            <div className="col-lg-12 col-sm-12">
              <h4>
                Organs & Min.CH.-Part 2(Please fill this form with Benchmark
                data)
              </h4>

              <form id="graphForm">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Large Intestine left
                  </label>
                  <input
                    type="text"
                    value={this.state.LargeIntestine_left}
                    onChange={e =>
                      this.setState({ LargeIntestine_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Large Intestine Right
                  </label>
                  <input
                    type="text"
                    value={this.state.Large_Intestine_right}
                    onChange={e =>
                      this.setState({ Large_Intestine_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Spieen Left</label>
                  <input
                    type="text"
                    value={this.state.Spieen_left}
                    onChange={e =>
                      this.setState({ Spieen_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Kidneys left</label>
                  <input
                    type="text"
                    value={this.state.Kidneys_left}
                    onChange={e =>
                      this.setState({ Kidneys_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Kidneys Right</label>
                  <input
                    type="text"
                    value={this.state.Kidneys_right}
                    onChange={e =>
                      this.setState({ Kidneys_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Prostate M Uterus W
                  </label>
                  <input
                    type="text"
                    value={this.state.Prostate_M_Uterus_W}
                    onChange={e =>
                      this.setState({ Prostate_M_Uterus_W: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Bladder</label>
                  <input
                    type="text"
                    value={this.state.Bladder}
                    onChange={e => this.setState({ Bladder: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Perineumm chakra
                  </label>
                  <input
                    type="text"
                    value={this.state.Perineummchakra}
                    onChange={e =>
                      this.setState({ Perineummchakra: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Armpits left</label>
                  <input
                    type="text"
                    value={this.state.Armpits_left}
                    onChange={e =>
                      this.setState({ Armpits_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Armpits right</label>
                  <input
                    type="text"
                    value={this.state.Armpits_right}
                    onChange={e =>
                      this.setState({ Armpits_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Hands left</label>
                  <input
                    type="text"
                    value={this.state.Hands_left}
                    onChange={e =>
                      this.setState({ Hands_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Hands right</label>
                  <input
                    type="text"
                    value={this.state.Hands_right}
                    onChange={e =>
                      this.setState({ Hands_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Spine</label>
                  <input
                    type="text"
                    value={this.state.Spine}
                    onChange={e => this.setState({ Spine: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Hips m Chakra left
                  </label>
                  <input
                    type="text"
                    value={this.state.HipsmChakra_left}
                    onChange={e =>
                      this.setState({ HipsmChakra_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">
                    Hips m Chakra right
                  </label>
                  <input
                    type="text"
                    value={this.state.HipsmChakra_right}
                    onChange={e =>
                      this.setState({ HipsmChakra_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Knees right</label>
                  <input
                    type="text"
                    value={this.state.Knees_right}
                    onChange={e =>
                      this.setState({ Knees_right: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Knees left</label>
                  <input
                    type="text"
                    value={this.state.Knees_left}
                    onChange={e =>
                      this.setState({ Knees_left: e.target.value })
                    }
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Feet left</label>
                  <input
                    type="text"
                    value={this.state.Feet_left}
                    onChange={e => this.setState({ Feet_left: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Feet Right</label>
                  <input
                    type="text"
                    value={this.state.Feet_right}
                    onChange={e =>
                      this.setState({ Feet_right: e.target.value })
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
AddOrgansPartTwoForm.propTypes = {
  formCancelHandler: PropTypes.func.isRequired
};
export default AddOrgansPartTwoForm;
