import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './Main.css'
import SidebarMenu  from './SidebarMenu'

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

class Main extends Component {
  render() {
    const {routes} = this.props;
    return (
        <div id='main' style={{display:'flex'}}>
          <SidebarMenu></SidebarMenu>
          <div className={'container'} style={{backgroundColor:'skyblue',flex:1}}>
            <header></header>
            <main>
              <div className={'wrap'}>
                {routes.map((route,i)=>(<RouteWithSubRoutes key={i} {...route} />))}
              </div>
            </main>
            <footer>
              <span>Copyright 上海宝能信息科技有限公司 © 2018 - 2021</span>
              <span>宝能智慧能源云平台</span>
            </footer>
          </div>
        </div>
    );
  }
}

export default Main;
