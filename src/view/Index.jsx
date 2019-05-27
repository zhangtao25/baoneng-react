import React, { Component } from 'react';
import {Route} from 'react-router-dom'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function Index({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
    </div>
  );
}
export default Index;
