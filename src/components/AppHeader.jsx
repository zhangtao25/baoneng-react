import React,{Component} from 'react';
import {Dropdown,Icon,Menu} from 'antd'
import './appHeader.css'
import logo from './../assets/logo.svg'

class AppHeader extends Component{
  constructor(props){
    super(props)
  }
  render() {
    let menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
          </Menu.Item>
        </Menu>
    )
    return(
        <div>
          <div className="margin">
            <img src={logo} className="logo"/>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                Hover me <Icon type="down" />
              </a>
            </Dropdown>
          </div>
        </div>
    )
  }
}

export default AppHeader
