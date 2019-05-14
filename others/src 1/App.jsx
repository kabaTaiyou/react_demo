import React,{Component} from 'react'
import {Link,Route,Redirect,Switch,NavLink }from'react-router-dom'
import Home from './components/home/index'
import About from './components/about/index'
import MyLink from './components/My-link'
export default class App extends Component {
  
  render(){
    return  <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <MyLink to="/about">About</MyLink>
            <MyLink to="/home">Home</MyLink>

            <NavLink to="/home">Home</NavLink>

            <MyLink to="/home">Home</MyLink>

            {/*<MyLink className="list-group-item" to="/about">About</MyLink>*/}
            {/*<MyLink className="list-group-item myActive" to="/home" aria-current="page">Home</MyLink>*/}
            <Link className="list-group-item" to="/about">About</Link>
            <Link className="list-group-item myActive" to="/home" aria-current="page">Home</Link>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <div>
                <Switch>
                  <Route path='/home' component={Home}/>
                  <Route path='/about' component={About}/>
                  <Redirect to='/home'/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  
}