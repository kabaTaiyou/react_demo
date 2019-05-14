/**
 * Created by kabantaiyou on 2019/5/10.
 */
import React ,{ Component } from 'react'

export default class AddComponent extends Component{
  // constructor(){
  //   super()
  //   this.state = {
  //     name:'',
  //     content:''
  //   }
  // }
  state = {
    name:'',
    content:''
  }
  id = 3
  handelChange = (data)=>{
    return (e)=>{
      this.setState ({
        [data]:e.target.value
      })
    }

  }
  addData=(e)=>{
    e.preventDefault()
    const { callBack } = this.props
    const { name,content } = this.state
    callBack({ name,content ,id:this.id++})
    this.setState({
      name:'',
      content:''
    })
  }
  render(){
    //获取回调函数


    return <div className="col-md-4">
      <form className="form-horizontal" onSubmit={this.addData}>
        <div className="form-group">
          <label>用户名</label>
          <input value={this.state.name} type="text" className="form-control" placeholder="用户名" onChange={this.handelChange('name')}/>
        </div>
        <div className="form-group">
          <label>评论内容</label>
          <textarea  value={this.state.content} className="form-control" rows="6" placeholder="评论内容" onChange={this.handelChange('content')}></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default pull-right"  >提交</button>
          </div>
        </div>
      </form>
    </div>
  }
}