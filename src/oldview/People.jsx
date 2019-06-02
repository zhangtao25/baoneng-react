import React, {Component} from 'react'
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

class People extends Component{
  constructor(props){
    super(props)
  }
  render() {

    let {routes} = this.props
    return(
        <div>
          ssssfffffffffffffffffdddd
          {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
        </div>
    )
  }
  componentDidMount(){
    console.log(this.props)
  }
}

export default People
