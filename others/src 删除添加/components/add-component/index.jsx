import React,{Component} from 'react'
export default class AddComponent extends Component{
  id = 3
  state = {
    name:'',
    content:'',
  }
  //这个onChange 方法我需要自己定义，并且 多个输入框 公用一个 利用闭包，高阶函数
  handelChange = (prop) => {
    return (e)=>{
      this.setState({
        [prop]:e.target.value
      })
    }
  }
  //下一步 我需要提交form表单，通过onsubmit 事件 将add component组件 的状态数据 提交到app组件上
  handelSubmit=(e)=>{
    e.preventDefault()
    //首先获取 此时的状态，并且在这里进行判断，如果我输入的值为空，则不提交
    const {name,content,} = this.state
    if(name&&content){

      //此时 我需要传给app  怎么传？  利用 app给我的传过来的回调函数
      //获取 钩子函数
      const {callBack} = this.props
      callBack({name,content,id:this.id++})
      this.setState({
        name:'',
        content:'',
      })
    }

  }
  render(){
    //这一步 需要实现的是如何 现价数据 到app上
    //首先 定义一个状态 我需要调用onChange 方法，给我的输入框，目的是为了让状态自动变化


    return<div className="col-md-4">
      <form className="form-horizontal" onSubmit={this.handelSubmit}>
        <div className="form-group">
          <label>用户名</label>
          <input value={this.state.name} type="text" className="form-control" placeholder="用户名"  onChange={this.handelChange('name')}/>
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea value={this.state.content} className="form-control" rows="6" placeholder="评论内容" onChange={this.handelChange('content')}></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default pull-right">提交</button>
          </div>
        </div>
      </form>
    </div>
  }
}