import React, { Component } from "react";
class chooseFolder extends Component {
  constructor(props){
    super(props)
    this.state={
      path:[]

    }
  }

  onChangeHandler=event=>{
     this.setState({path:event.target.files})
  }
  
  render() {
    for(var item of this.state.path) {
      console.log(item);
    }
  
    return (
      <div>
        <input  webkitdirectory="" type="file" onChange={this.onChangeHandler} />
      </div>
     
    );
  }
}

export default chooseFolder;