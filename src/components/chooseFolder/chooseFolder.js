import React, { Component } from "react";
class chooseFolder extends Component {
 constructor(props) {
    super(props);
    this.state = {
      path:[],
      arr:null,
       displayMenu: false,
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  } 

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: true }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }
  onChangeHandler = event => {
    this.setState({ path: event.target.files });
  };

  render() {
   var arr = [];
   for (var key in this.state.path) {
      if(key<this.state.path.length){
      arr.push(this.state.path[key]);
  }

}
   const listItems = arr.map((item,key) =>
    <li key={key}>{item.name}</li>
     );
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="file"   webkitdirectory=""   onChange={this.onChangeHandler} />
        </label>
        <br />
         <br />  
         <button className="button" onClick={this.showDropdownMenu}> Files to optimize </button>
           { this.state.displayMenu ? (
          <ul>
            {listItems}
          </ul>
        ):
        (
          null
        )
        }
        <br />
      </form>
    );
  }
}
export default chooseFolder;
