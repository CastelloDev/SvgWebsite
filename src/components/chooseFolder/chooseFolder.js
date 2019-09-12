import React, { Component } from 'react';
import './../checkBoxSelection/checkBoxSelection.scss';
import optimizeSvg from "../functions";

import CheckBoxSelection from '../checkBoxSelection/checkBoxSelection';
class chooseFolder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			path: [],
			displayMenu: false,
      dataUrl:'',
      optimizeDataUrl:''
    }
	}

	showDropdownMenu = event => {
		event.preventDefault();
		this.setState({ displayMenu: true }, () => {
			document.addEventListener('click', this.hideDropdownMenu);
		});
	};

	hideDropdownMenu = () => {
		this.setState({ displayMenu: true }, () => {
			document.removeEventListener('click', this.hideDropdownMenu);
		});
  };
  
	onChangeHandler = event => {
     this.setState({path:event.target.files});
  }

  convertSvgToDataUrl=(file)=>{
    let reader  = new FileReader();
      reader.onload = (result)=>{
        this.setState({dataUrl:result.target.result});
      }
      if (file) {
        reader.readAsDataURL(file);
      }
  }

   optimizeSvgDataUrl= async (dataUrl) =>{
      let data= await optimizeSvg(dataUrl);
      this.setState({optimizeDataUrl:data});
  }

  render() {
		
		const listOfFileNames = [];
		for(var key of this.state.path) {
			listOfFileNames.push(<CheckBoxSelection key={key.name} filenames={key.name} />);
		}
	
  return (
			<div className="main">
				<div className="myfiles">
					<label>
						<input type="file" webkitdirectory="" onChange={this.onChangeHandler} />
					</label>
				</div>
				<div className="myfiles">
					<button onClick={this.showDropdownMenu}> Files to optimize </button>
				</div>
				<div className={this.state.displayMenu ? "show-file-list":"hide-file-list"}>
					{listOfFileNames}
				</div>
				<div>
				 <button onClick={this.convertSvgToDataUrl}>optimize</button>
				 </div>
			</div>
		);
	} 
}
export default chooseFolder;
