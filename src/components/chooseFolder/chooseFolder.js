import React, { Component } from 'react';
import './../checkBoxSelection/checkBoxSelection.scss';
import optimizeSvg from '../functions';
import CheckBoxSelection from '../checkBoxSelection/checkBoxSelection';
class ChooseFolder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			path: [],
			displayMenu: false,
      originalDataUrl:"",
      optimizedDataUrl:""
    }
	}

  onChangeHandler = event => {
     this.setState({path:event.target.files});
  }

  convertSvgToDataUrl=(file)=>{
    let reader  = new FileReader();
      reader.onload = (result)=>{
        this.setState({originalDataUrl:result.target.result});
      }
      if (file) {
        reader.readAsDataURL(file);
      }
  }

   optimizeSvgDataUrl= async (dataUrl) =>{
      this.setState({optimizedDataUrl:await optimizeSvg(dataUrl)});
  }

  render() {
		
		const listOfFileNames = [];
		for(var key of this.state.path) {
			listOfFileNames.push(<CheckBoxSelection key={key.name} filename={key.name} />);
		}
	
  return (
			<div className="main">
				<div className="file">
					<label>
						<input type="file" webkitdirectory="" onChange={this.onChangeHandler} />
					</label>
				</div>
				<div >
					{listOfFileNames}
				</div>
			</div>
		);
	} 
}
export default ChooseFolder;