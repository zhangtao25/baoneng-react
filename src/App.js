import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AppHeader from './components/AppHeader'
import routes from './router/router.config'

function RouteWithSubRoutes(route) {
  return (
    <div>
      <AppHeader/>
      <Route
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes}/>
        )}
      />
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
