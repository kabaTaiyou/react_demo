import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import {Route,Redirect,Switch }from'react-router-dom'
import News from '../news/'
import Message from '../message'
// export default class Home extends Component {
//   render(){
//     return <div>
//         <ul class="nav nav-tabs">
//           <li><NavLink to="/home/news">News</NavLink></li>
//           <li><NavLink to="/home/message" class="myActive" aria-current="page">Message</NavLink></li>
//         </ul>
//       <Route path='/home/news' component={<News/>}/>
//
//       </div>
//   }
// }
export default class Home extends Component {
  render() {
    return <div>
      <h1>
        Home组件的内容
      </h1>
      <div>
        <ul className="nav nav-tabs">
          <li><NavLink to="/home/news">News</NavLink></li>
          <li><NavLink to="/home/message">Message</NavLink></li>
        </ul>
        <div>
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            {/*<Redirect to="/home/news"/>*/}
          </Switch>
        </div>
      </div>
    </div>;
  }
}

