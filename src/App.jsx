import React,{Component} from 'react'
import { Button,Progress,message } from 'antd';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './page/login/login'
import Admin from './page/admin/admin'

// export Component from 'react'
export default class App extends Component{

  render(){
    return <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Admin}/>
      </Switch>
    </BrowserRouter>
  }
}