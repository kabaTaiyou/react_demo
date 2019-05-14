/**
 * Created by kabantaiyou on 2019/5/10.
 */
// export React , {Component} from 'react';
import React, { Component } from 'react';
import AddComponent from './component1/add-component'
import ComponentList from './component1/component-list'
export default class App extends Component{

  //初始化状态
  state = {
    data:[{name:'haha',content:'很简单' ,id:1},{name:'hehe',content:'简单毛',id:2}]
  }
  //此时 通过 app的回调函数来操作
  callBack = (prop) =>{

      this.setState({
        data:[prop,...this.state.data]
      })

  }
  delData = (thatData)=>{
      //删除状态栏中对应的数据 通过data
    this.setState({
      data:this.state.data.filter((items)=>{
       return thatData !== items.id
      })
    })
  }
  render(){
    const { data } = this.state
    return<div>
      <header className="site-header jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <AddComponent callBack={this.callBack} delData={this.delData}/>
        <ComponentList data={data} delData={this.delData} length={this.state.data.length}/>
      </div>
    </div>
  }

}
