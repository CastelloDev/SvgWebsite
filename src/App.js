import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import chooseFolder from "../src/components/chooseFolder/chooseFolder";
import displaySvg from "../src/components/displaySvg/displaySvg";
class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="h-100">
            <Switch>
              <Route path="/choosefile" component={chooseFolder} />
              <Route path="/displaySvg" component={displaySvg} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
