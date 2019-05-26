import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import AppHeader from './components/AppHeader'
import Sign from './view/Sign'
import People from './view/People'
// import Index from './view/Index'
// import Detail from './view/Detail'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <AppHeader/>
          <Switch>
            <Route path='/signin' render={props=>(
                <Sign {...props} test={'111'}/>
            )}/>
            <Route path='/signup' render={props=>(
                <Sign {...props}/>
            )}/>
            <Route path='/people' component={People}/>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
