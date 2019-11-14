import React, { Component } from "react";
import "./../checkBoxSelection/checkBoxSelection.scss";
import { optimizeSvg } from "../functions";
import CheckBoxSelection from "../checkBoxSelection/checkBoxSelection";

class ChooseFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: [],
      value: "",
      displayMenu: false,
      originalSvgDataUrl: "",
      optimizedDataUrl: ""
    };
  }

  onChangeHandler = event => {
    this.setState({ path: event.target.files, value: event.target.value });
  };

  convertSvgToDataUrl = file => {
    let reader = new FileReader();
    reader.onload = result => {
      this.setState({ originalSvgDataUrl: result.target.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  optimizeSvgDataUrl = async dataUrl => {
    this.setState({ optimizedDataUrl: await optimizeSvg(dataUrl) });
  };

  render() {
    const listOfFileNames = [];
    for (let key of this.state.path) {
      listOfFileNames.push(
        <CheckBoxSelection key={key.name} filename={key.name} file={key} />
      );
    }

    return (
      <div className="main">
        <div className="file">
          <label>
            <input
              type="file"
              webkitdirectory=""
              value={this.state.value}
              onChange={e => this.onChangeHandler(e)}
            />
          </label>
        </div>

        <div>{listOfFileNames}</div>
      </div>
    );
  }
}
export default ChooseFolder;
