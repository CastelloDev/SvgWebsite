import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ChooseFolder from '../src/components/chooseFolder/chooseFolder';
import DisplaySvg from '../src/components/displaySvg/displaySvg';
import NavBar from './components/NavBar/NavBar';
import ReduxDemo from './components/ReduxDemo/ReduxDemo';
import mainReducer from './store/mainReducer';
import SvgSettingOptions from './components/svgSetting/svgSettingOptions';
import './App.scss';
class App extends Component {
    render() {
        const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <NavBar/>
                        <Switch>
                            <Route path='/choosefile' component={ChooseFolder} />
                            <Route path='/displaySvg' component={DisplaySvg} />
                            <Route path='/reduxdemo' component={ReduxDemo} />
                            <Route path='/svgSettingOptions' component={SvgSettingOptions} />
                            <Route path='/displayAll' component={DisplayAllComponent}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
