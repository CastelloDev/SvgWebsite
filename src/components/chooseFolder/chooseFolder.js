import React, { Component } from "react";
class chooseFolder extends Component {
    onChangeHandler=event=>{
      console.log(event.target.files);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  render() {
    return (
      <div>
        <input directory=""  webkitdirectory="" type="file" onChange={this.onChangeHandler} />

       </div>
    );
  }
}

export default chooseFolder;