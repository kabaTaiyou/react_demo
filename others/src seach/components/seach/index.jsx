import React,{Component} from 'react'
import { publish } from 'pubsub-js'

export default class Seach extends Component{
  state = {
    seachName:''
  }
  handelChange = (e)=>{
    this.setState({
      seachName:e.target.value
    })
  }
  handelClick = ()=>{
    //获取搜索名字 然后传给app组件
    const  { seachName } = this.state
    // const {changeSeachName } = this.props
    if(seachName){
      //调用父组件 传过来的函数 修改状态
      // changeSeachName(seachName)
      publish('SEACH',seachName)
    }
  }
  render(){
    return  <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" onChange={this.handelChange}/>
        <button onClick={this.handelClick}>Search</button>
      </div>
    </section>
  }
}