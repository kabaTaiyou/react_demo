import React,{Component} from 'react'
import { Link,Route } from 'react-router-dom'
import Mdir from '../messageDIR/index'
export default class Message extends Component {
  state = {
    message:[]
  }
  componentDidMount (){
    setTimeout(()=>{
      this.setState({
        message:[
          {content:'dafgjjsdgf',id:1},
          {content:'dfkjguu',id:2},
          {content:'iuhuihui',id:3}
        ]
      })
    },1500)
  }
  push = (id)=>{
    return ()=>{
        this.props.history.push(`/home/message/${id}`)
    }
  }
  replace = (id)=>{
    return ()=>{
      this.props.history.replace(`/home/message/${id}`)
    }
  }
  goBack = (id)=>{
    return ()=>{
      this.props.history.goBack(`/home/message/${id}`)
    }
  }
  goForword = (id)=>{
    return ()=>{
      this.props.history.goForword(`/home/message/${id}`)
    }
  }
  render(){
    return  <div>
      <div>
        <ul>
          {
            this.state.message.map((items)=>{
              return <li>
                <Link to={`/home/message/${items.id}`}>{items.content}</Link> &nbsp;&nbsp;
                <button onClick={this.push(items.id)}>push</button> &nbsp;
                <button onClick={this.replace(items.id)}>replace</button>
                <button onClick={this.goForword(items.id)}>前进</button>
                <button onClick={this.goBack(items.id)}>后退</button>
              </li>
            })
          }


        </ul>
        <Route path='/home/message/:id' component={Mdir}/>


      </div>
    </div>
  }
}

