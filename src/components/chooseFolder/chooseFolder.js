import React, { Component } from "react";
import "./../checkBoxSelection/checkBoxSelection.scss";
import optimizeSvg from "../functions";
import CheckBoxSelection from "../checkBoxSelection/checkBoxSelection";

class chooseFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: [],
      displayMenu: false,
      originalDataUrl: "",
      optimizedDataUrl: ""
    };
  }

	showDropdownMenu = ()=> {
	this.setState({
				displayMenu: !this.state.displayMenu
		});
	};

  onChangeHandler = event => {
     this.setState({path:event.target.files});
  }

  onChangeHandler = event => {
    this.setState({ path: event.target.files });
  };

  convertSvgToDataUrl = file => {
    let reader = new FileReader();
    reader.onload = result => {
      this.setState({ originalDataUrl: result.target.result });
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
		for(var key of this.state.path) {
			listOfFileNames.push(<CheckBoxSelection checkboxId={key.name.split(".")[0]} key={key.name} filename={key.name}  />);
		}
	
  return (
			<div className="main">
				<div className="file">
					<label>
						<input type="file" webkitdirectory="" onChange={this.onChangeHandler} />
					</label>
				</div>
				<div className="file">
					<button onClick={this.showDropdownMenu}> Files to optimize </button>
				</div>
				<div className={this.state.displayMenu ? "show-file-list":"hide-file-list"}>
					{listOfFileNames}
				</div>
			</div>
		);
	} 
}
export default chooseFolder;