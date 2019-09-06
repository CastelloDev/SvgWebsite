import React, { Component } from "react";
import {getAllFileNames} from "../../functions/functions";

class displayFolder extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          shouldDisplayFolderButton = true ,
          directory = null,
          fileNames = [],
          checkedFileNames = []
        };
      }

      populateFileNames(directory){
        if(directory != null){
        this.setState({
            fileNames : getAllFileNames(directory)
        });
        if(fileNames != null){
            this.setState({shouldDisplayFolderButton:false
        });
        }
      }
      }

      

      async componentWillMount(){
            if((directory != null || directory != undefined) || (fileNames != null || fileNames != undefined) ){
                    //populate a list with file name

            }else{
                    //inform screen that the choosen folder is empty

            }

      }
      
    onApplyButton(){
        
    }
     
    onBackButton(){
      this.setState({
        shouldDisplayFolderButton:!shouldDisplayFolderButton
      });
    }

  render() {
    return (
      <div className="">
        {this.fileName ? 
        <div className="">
          <ol>
            {this.fileNames.map(fileName => <li>{fileName}<input type="checkbox" name={fileName} value={fileName}/></li> )}
          </ol>
           <div className="">
          <button className="" id="applyId">Apply</button>
          <button className="" id="backId">Back</button>
          </div>
      </div>
      : <div>Folder is empty, There were no svg files were found.</div>}
    </div>

    );
  }
}

export default chooseFolder;