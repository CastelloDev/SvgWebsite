import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import chooseFolder from "../src/components/chooseFolder/chooseFolder";
class App extends Component {
render() {
  return (
      <div className="app">
          <BrowserRouter>
              <div className="h-100">
                  <Switch>
                      <Route path="/choosefile" component={chooseFolder} />
                  </Switch>  

                  </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
