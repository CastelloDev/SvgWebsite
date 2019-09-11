import React, { Component } from 'react';
import './../checkBoxSelection/checkBoxSelection.scss';
import optimizeSvg from "../functions";

import CheckBoxSelection from '../checkBoxSelection/checkBoxSelection';
class chooseFolder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			path: [],
			displayMenu: false
			dataUrl:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgODAgODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU0LjEgKDc2NDkwKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5mZWF0dXJlcy9jYWxsZW5kYXI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8c3R5bGU+CiAgICAgICAgLmNvbG91ci1jbGFzc3tmaWxsOiNGRkZGRkY7fQogICAgPC9zdHlsZT4KICAgIDxnIGlkPSJmZWF0dXJlcy9jYWxsZW5kYXIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDAuMDAwMDAwKSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjIiPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxIiB5PSI2LjA2MzI5MTE0IiB3aWR0aD0iNjUuODQ4MTAxMyIgaGVpZ2h0PSI2Ni44NjA3NTk1IiByeD0iMyI+PC9yZWN0PgogICAgICAgICAgICA8cGF0aCBkPSJNMS41MTg5ODczNCwyMS45NjgzMjk3IEw2NS45NTk4NzQ0LDIxLjk2ODMyOTciIGlkPSJMaW5lIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjEwMTI2NiwgMC4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjEiIHk9IjEiIHdpZHRoPSI2LjEwMTI2NTgyIiBoZWlnaHQ9IjEyLjE3NzIxNTIiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMi4xMzkyNDA1IiB5PSIxIiB3aWR0aD0iNi4xMDEyNjU4MiIgaGVpZ2h0PSIxMi4xNzcyMTUyIiByeD0iMyI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMjMuMjc4NDgxIiB5PSIxIiB3aWR0aD0iNi4xMDEyNjU4MiIgaGVpZ2h0PSIxMi4xNzcyMTUyIiByeD0iMyI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMzQuNDE3NzIxNSIgeT0iMSIgd2lkdGg9IjYuMTAxMjY1ODIiIGhlaWdodD0iMTIuMTc3MjE1MiIgcng9IjMiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjQ1LjU1Njk2MiIgeT0iMSIgd2lkdGg9IjYuMTAxMjY1ODIiIGhlaWdodD0iMTIuMTc3MjE1MiIgcng9IjMiPjwvcmVjdD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRkZGRkZGIiB4PSI5LjEwMTI2NTgyIiB5PSIyOC4zNDE3NzIyIiB3aWR0aD0iOS4xMzkyNDA1MSIgaGVpZ2h0PSI5LjEzOTI0MDUxIiByeD0iMyI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRkZGRkZGIiB4PSIyMy4yNzg0ODEiIHk9IjI4LjM0MTc3MjIiIHdpZHRoPSI5LjEzOTI0MDUxIiBoZWlnaHQ9IjkuMTM5MjQwNTEiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIHg9IjM3LjQ1NTY5NjIiIHk9IjI4LjM0MTc3MjIiIHdpZHRoPSI5LjEzOTI0MDUxIiBoZWlnaHQ9IjkuMTM5MjQwNTEiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIHg9IjUxLjYzMjkxMTQiIHk9IjI4LjM0MTc3MjIiIHdpZHRoPSI5LjEzOTI0MDUxIiBoZWlnaHQ9IjkuMTM5MjQwNTEiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIHg9IjkuMTAxMjY1ODIiIHk9IjQyLjUxODk4NzMiIHdpZHRoPSI5LjEzOTI0MDUxIiBoZWlnaHQ9IjkuMTM5MjQwNTEiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIHg9IjIzLjI3ODQ4MSIgeT0iNDIuNTE4OTg3MyIgd2lkdGg9IjkuMTM5MjQwNTEiIGhlaWdodD0iOS4xMzkyNDA1MSIgcng9IjMiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0ZGRkZGRiIgeD0iMzcuNDU1Njk2MiIgeT0iNDIuNTE4OTg3MyIgd2lkdGg9IjkuMTM5MjQwNTEiIGhlaWdodD0iOS4xMzkyNDA1MSIgcng9IjMiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0ZGRkZGRiIgeD0iNTEuNjMyOTExNCIgeT0iNDIuNTE4OTg3MyIgd2lkdGg9IjkuMTM5MjQwNTEiIGhlaWdodD0iOS4xMzkyNDA1MSIgcng9IjMiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0ZGRkZGRiIgeD0iOS4xMDEyNjU4MiIgeT0iNTYuNjk2MjAyNSIgd2lkdGg9IjkuMTM5MjQwNTEiIGhlaWdodD0iOS4xMzkyNDA1MSIgcng9IjMiPjwvcmVjdD4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0ZGRkZGRiIgeD0iMjMuMjc4NDgxIiB5PSI1Ni42OTYyMDI1IiB3aWR0aD0iOS4xMzkyNDA1MSIgaGVpZ2h0PSI5LjEzOTI0MDUxIiByeD0iMyI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjRkZGRkZGIiB4PSIzNy40NTU2OTYyIiB5PSI1Ni42OTYyMDI1IiB3aWR0aD0iOS4xMzkyNDA1MSIgaGVpZ2h0PSI5LjEzOTI0MDUxIiByeD0iMyI+PC9yZWN0PgogICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZGRkZGIiBjbGFzcz0iY29sb3VyLWNsYXNzIiBjeD0iNjEuNzcyMTUxOSIgY3k9IjY2LjgzNTQ0MyIgcj0iMTIuMTY0NTU3Ij48L2NpcmNsZT4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJQYXRoLTEyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHBvaW50cz0iNTcuNjY2NjMzNyA2NS45MDQ5ODkxIDYwLjc1OTQ5MzcgNjguOTk3ODQ5MSA2NS45NTk4NzQ0IDYzLjc5NzQ2ODQiPjwvcG9seWxpbmU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

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

   optimizeSvgDataUrl= async () =>{
      let data= await optimizeSvg(this.state.dataUrl);
      console.log("dataUrl",data);
  }
  render() {
		const arr = [];
		for (var key in this.state.path) {
			if (key < this.state.path.length) {
				arr.push(this.state.path[key]);
			}
			
		}
		const listOfFileNames = arr.map((item, key) => <CheckBoxSelection filenames={item.name} />);
  
  
  
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
				<div className={this.state.displayMenu ? 'show-file-list':"hide-file-list"}>
					{listOfFileNames}
				</div>
				<div>
				 <button onClick={this.optimizeSvgDataUrl}>optimize</button>
				 </div>
			</div>
		);
	}
}
export default chooseFolder;
