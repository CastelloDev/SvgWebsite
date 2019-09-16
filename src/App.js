import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChooseFolder from '../src/components/chooseFolder/chooseFolder';
import DisplaySvg from '../src/components/displaySvg/displaySvg';
import './App.scss';
import DisplayAllComponent from './components/displayAllComponent';
import SvgSettingOptions from './components/svgSetting/svgSettingOptions';
class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path='/choosefile' component={ChooseFolder} />
                            <Route path='/displaySvg' component={DisplaySvg} />
                            <Route path='/svgSettingOptions' component={SvgSettingOptions} />
                            <Route path='/displayAll' component={DisplayAllComponent}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
