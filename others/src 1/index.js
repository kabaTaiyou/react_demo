/**
 * Created by kabantaiyou on 2019/5/12.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import './bootstrap.css'
//所有的路由组件 必须被包含在BrowserRouter 组件内
ReactDOM.render(
  (<BrowserRouter>
    <App />
  </BrowserRouter>),document.getElementById('root'))
