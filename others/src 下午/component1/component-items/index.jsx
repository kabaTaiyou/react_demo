import React ,{ Component}from 'react'

export default class ComponentItems extends Component{
  handelClick=()=>{
    const {delData} = this.props
    console.log(this.props,'texte  ietems')
    if(window.confirm(`删除${this.props.data.name}吗？`)){
      delData(this.props.data.id)
    }
  }
  render(){
    const {data} = this.props
    return <li className="list-group-item">
        <div className="handle">
          <button onClick={this.handelClick}>删除</button>
        </div>
        <p className="user"><span >{data.name}</span><span>说:</span></p>
        <p className="centence">{data.content}</p>
      </li>

  }
}




