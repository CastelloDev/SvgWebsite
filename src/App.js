import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import chooseFolder from "../src/components/chooseFolder/chooseFolder";
import displaySvg from "../src/components/displaySvg/displaySvg";
import "./App.scss";
import svgSettingArray from "./components/svgSetting/svgSettingArray" ;
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/choosefile" component={chooseFolder} />
              <Route path="/displaySvg" component={displaySvg} />
               <Route path="/svgCardSetting" component={svgSettingArray} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
