import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default class ChakraGraphForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "", // Rich text editor state
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
    this.setState({ text: value });
  };
  render() {
    return (
      <div>
        <div className="container-fluid py-5 mt-5">
          <h3 className="card-subtitle text-center">
            Major chakras size & activation level test
          </h3>

          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12">
              <h4>
                Front Chakara Form (Please fill this form with Benchmark data)
              </h4>

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
            <div className="col-lg-6 col-sm-12">
              <h4>
                Back Chakara From (Please fill this form with Benchmark data)
              </h4>
              <form id="graphForm-second">
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Crown Chakra</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Forehead Chakra
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Ajna Chakra</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Throat Chakra</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Heart Chakra (Front)
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Heart Chakra (Back)
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Solar Plex Charka (Front)
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Solar Plex Charka (Back)
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Spleen Chakra (Front)
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Spleen Chakra (Back)
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Meng Mein Chakra
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Sex Chakra </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Basic Chakra</label>
                  <input type="text" className="form-control" />
                </div>
              </form>
            </div>

            <div className="col-lg-12 col-sm-6">
              <h2>REPORT COMMENTS</h2>
              <ReactQuill
                theme="snow"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <div className="mt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-warning btn-lg btn-block"
                >
                  Save Graph
                </button>
                <button
                  type="button"
                  class="btn btn-secondary btn-success btn-lg btn-block"
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