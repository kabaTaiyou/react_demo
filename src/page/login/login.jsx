import React, {Component} from 'react'
import logo from './images/logo.png'
import './login.less'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
 class Login extends Component {
   validator(rule, value, callback){
     console.log('validator()', rule, value)
     if(!value){
       callback('请输入密码')
     }else if (value.length<4){
       callback('密码长度必须4位以上')
     }else if (value.length>12){
       callback('密码的长度必须12位以内')
     }else {
       callback()
     }
   }
   handleSubmit=(e)=>{
     e.preventDefault()
     this.props.form((err,value)=>{
       if(!err){
         console.log(value)
       }else {
         console.log(err)
       }
     })
   }
  render() {
    return <div className="login">

      <header className="login-header">
        <img src={logo} alt="logo"/>
          <h1>
              React项目: 后台管理系统
          </h1>
      </header>

      <section className="login-content">
          <h2>用户登陆</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {this.props.form.getFieldDecorator('username', {
              rules: [{ required: true,whitespace:true, message: '请输入正确的用户名' }
                     ,{ min:4,message:'用户名至少为四位' }
                     ,{ max:12,message:'用户名最长为十二位'}
                     ,{ pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须为数字，字母，下划线组成' }
              ],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="user"
                placeholder="请输入用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>

            {
              this.props.form.getFieldDecorator('password',{
                rules:[{
                  validator:this.validator
                }]
              })(<Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )
            }



          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  }

}
//高阶组件
export default Form.create()(Login)
