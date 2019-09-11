import React, { Component } from "react";
import './../checkBoxSelection/checkBoxSelection.scss';

import CheckBoxSelection from "../checkBoxSelection/checkBoxSelection";
class chooseFolder extends Component {
 constructor(props) {
    super(props);
    this.state = {
      path:[],
      displayMenu: false,
    }
  } 

  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: true }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }
  onChangeHandler = event => {
    this.setState({ path: event.target.files });
  };
  

  render() {
   const arr = [];
   for (var key in this.state.path) {
      if(key<this.state.path.length){
      arr.push(this.state.path[key]);
  }

}
   const listItems = arr.map((item,key) =>
  <CheckBoxSelection filenames={item.name}/>
     );
    return (
      <div className="main" >
        <div className="myfiles">
         <label >
          <input type="file"   webkitdirectory=""   onChange={this.onChangeHandler} />
        </label>
        </div>
        <div className="myfiles">
            <button onClick={this.showDropdownMenu}> Files to optimize </button>
        </div>
          <div className={`myfolderfiles ${this.state.displayMenu}`}  >
             {listItems}
            </div>
            </div>
    );
  }
}
export default chooseFolder;
