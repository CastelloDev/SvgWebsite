import React, { Component } from "react";
class chooseFolder extends Component {
    onChangeHandler=event=>{
      console.log(event.target.files);//give you the path of te files iside the folder

    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
    
}

  render() {
  
    return (
      <div className="">
        <input directory=""  webkitdirectory="" type="file" onChange={this.onChangeHandler} />

       </div>
    );
  }
}

export default chooseFolder;