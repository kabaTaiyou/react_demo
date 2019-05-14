
import React,{Component} from 'react'
import AddComponent from './components/add-component'
import ComponentList from './components/component-list'
export default class App extends  Component{

  state = {
    data:[{name:'jack',content:'说你妹啊 学不会还bb',id:1},{name:'mark_haha',content:'就他妈学，气死你',id:2}]
  }
  callBack = (data1) =>{
   this.setState({
     data:[data1,...this.state.data]
   })
    console.log(1)
  }
  delCallBack = (id)=>{
    this.setState({
     data:this.state.data.filter((items)=>{
        return id != items.id
    })
    })
    console.log(1111)
  }
  //做完这一步之后 要进行删除，如何删除，在那里删除，删除事件是在items组件上进行的，但是 删除的数据是在app组件上
  render(){
    return <div>
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

        <AddComponent callBack={this.callBack}/>
        <ComponentList data={this.state.data} delCallBack={this.delCallBack} length={this.state.data.length}/>

      </div>
    </div>
  }

}