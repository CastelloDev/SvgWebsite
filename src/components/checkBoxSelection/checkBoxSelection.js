import React, { Component } from "react";

class CheckBoxSelection extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          checkedItems: new Map(),
        }
    
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
      }



  render() {
    return (
      <div>
        <div>
            
        </div>
      </div>
    );
  }
}

export default CheckBoxSelection;
