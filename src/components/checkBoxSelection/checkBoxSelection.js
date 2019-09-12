import React, { Component } from "react";
import "./checkBoxSelection.scss";
class CheckBoxSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      checkedItems: new Map()
	};
	this.handleChange = this.handleChange.bind(this);
  }

  handleDivClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  handleChange=(e)=>{
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  componentWillMount() {
	this.setState({ isClicked: this.props.isSelected });
  }

  render() {
    return (
      <div
	  	id = {this.props.checkboxId}
        className={
          this.state.isClicked
            ? "checkbox-container-clicked"
            : "checkbox-container-unclicked"
		}
		
		onClick={this.handleDivClick}
		onChange={this.handleChange}
      >
        <input
		 id = {this.props.checkboxId+"-id"}
          className="checkbox-input"
          type="checkbox"
          checked={this.state.isClicked}
        />
        <label className="checkbox-label">{this.props.filename}</label>
      </div>
    );
  }
}
export default CheckBoxSelection;
