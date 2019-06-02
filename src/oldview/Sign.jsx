import React, {Component} from 'react';
import {Form, Input, Icon, Button, message} from 'antd';
import './sign.css';
import AuthService from './../service/auth'

class Sign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: '',
      user_password: '',
      reg_user_email: '',
      reg_user_password: '',
      reg_user_vcode: ''
    }
  }

  componentDidMount() {
  }

  componentWillMount() {
  }

  onSwitchClick() {
    // console.log(this)
    if (this.props.location.pathname === '/signin') {
      this.props.history.push('/signup');
    } else {
      this.props.history.push('/signin');
    }
  };

  onClickLogin(user_email, user_password) {
    AuthService.login(user_email, user_password).then(res => {
      message.success('登陆成功！');
      localStorage.setItem('user_email',user_email);
      localStorage.setItem('token',res);
      this.props.history.push('/people')
    })
  };

  handelEmailChange(event) {
    // console.log(this)
    this.setState({
      user_email: event.target.value
    })
  };

  handelPasswordChange(event) {
    this.setState({
      user_password: event.target.value
    })
  };

  onClickReg(user_email, user_password,user_vcode) {
    AuthService.reg(user_email, user_password, user_vcode).then(res => {
      console.log(res)
    })
  };

  handelRegEmailChange(event) {
    this.setState({
      reg_user_email: event.target.value
    })
  };

  handelRegPasswordChange(event) {
    this.setState({
      reg_user_password: event.target.value
    })
  };
  handelRegVcodeChange(event){
    this.setState({
      reg_user_vcode: event.target.value
    })
  }
  getVcode(){
    AuthService.getVcode(this.state.reg_user_email).then(res => {
      console.log(res)
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
        <div className='sign'>
          <div className='sign-wrap'>
            <div className='sign-main'>
              <p>芒果街</p>
              <p>注册知乎，发现更多可信赖的解答</p>
              {/*login*/}
              <Form
                  onSubmit={this.handleSubmit}
                  className="login-form"
                  style={this.props.location.pathname === '/signin' ? {display: 'block'} : {display: 'none'}}>
                <Form.Item>
                  {getFieldDecorator('login-user_email', {
                    rules: [{required: true, message: 'Please input your user_email!'}],
                  })(
                      <Input
                          prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                          placeholder="user_email"
                          onChange={(event) => this.handelEmailChange(event)}/>
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('login-user_password', {
                    rules: [{required: true, message: 'Please input your user_password!'}],
                  })(
                      <Input
                          prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                          type="password"
                          placeholder="user_password"
                          onChange={(event) => this.handelPasswordChange(event)}/>
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button"
                          onClick={() => this.onClickLogin(this.state.user_email, this.state.user_password)}>
                    登录
                  </Button>
                </Form.Item>
              </Form>
              {/*reg*/}
              <Form
                  onSubmit={this.handleSubmit}
                  className="reg-form"
                  style={this.props.location.pathname === '/signup' ? {display: 'block'} : {display: 'none'}}>
                <Form.Item>
                  {getFieldDecorator('reg-user_email', {
                    rules: [{required: true, message: 'Please input your user_email!'}],
                  })(
                      <Input
                          prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                          placeholder="user_email"
                          onChange={(event) => this.handelRegEmailChange(event)}/>
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('reg-user_password', {
                    rules: [{required: true, message: 'Please input your user_password!'}],
                  })(
                      <Input
                          prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                          type="password" placeholder="user_password"
                          onChange={(event) => this.handelRegPasswordChange(event)}/>
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('reg-user_vcode', {
                    rules: [{required: true, message: 'Please input your user_vcode!'}],
                  })(
                      <Input
                          prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                          placeholder="user_vcode"
                          onChange={(event) => this.handelRegVcodeChange(event)}/>
                  )}
                </Form.Item>
                <Form.Item>
                  <p onClick={()=>this.getVcode()}>获取验证码</p>
                  <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={() => this.onClickReg(
                          this.state.reg_user_email,
                          this.state.reg_user_password,
                          this.state.reg_user_vcode)}>
                    注册
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className='sign-bottom'>
              <p>
                <span>{this.props.location.pathname === '/signup' ? '已有账号？' : '没有账号？'}</span>
                <span className='sign-bottom-btn'
                      onClick={() => this.onSwitchClick()}>
                  {this.props.location.pathname === '/signup' ? '登录' : '注册'}
                </span>
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Form.create()(Sign);
