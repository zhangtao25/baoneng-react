import React, {Component} from 'react';
import './AppHeader.css'

import logo from './../assets/logo.svg'

import { Input, Menu, Dropdown, Icon, Button, Modal } from 'antd';
import Login from './Login'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <span>写文章</span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>发沸点</span>
    </Menu.Item>
  </Menu>
);

const Search = Input.Search;



class AppHeader extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <header className='app-header'>
        <div className="margin">
          <img src={logo} alt="" className="logo"/>
          <nav>
            <ul>
              <li>首页</li>
              <li>沸点</li>
              <li>话题</li>
              <li>小册</li>
            </ul>
          </nav>
          <div className='search'>
            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
          </div>
          <Dropdown className='add' overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              发表<Icon type="down" />
            </a>
          </Dropdown>



          <Dropdown className='menu' overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
              头像<Icon type="down" />
            </a>
          </Dropdown>

          <Button type="primary" onClick={this.showModal}>
            Open Modal with async logic
          </Button>
          <Modal
            title="Title"
            visible={visible}
            onOk={this.handleOk}
            confirmLoading={confirmLoading}
            onCancel={this.handleCancel}
          >
            <Login/>
          </Modal>
        </div>
      </header>
    )
  }
}

export default AppHeader
