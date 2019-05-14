import React,{Component} from 'react'
export default function ComponentItems (props) {
console.log(props,'props')
  const handelDel = ()=>{
    const {delCallBack,data,length} = props
    console.log(delCallBack)
    console.log(props.data.name)
    //我需要 当我点击的时候 出现一个自定义弹框  然后通过布尔值来判断是否删除，再将布尔值 传到app 再在app组件内删除
    if(window.confirm(`真牛逼 啊  你要删除${props.data.name}吗？？？？！！！！`)){
      //执行 app组件 的删除任务
      delCallBack(props.data.id)
    }
  }
  const {delCallBack,data} = props

    //此时 我收到了从 app-> list ->这里的state data

    //一会 需要通过这些传来的数据 来更新页面
    //定义一个删除的 事件

    return<li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={handelDel}>删除</a>
        </div>
        <p className="user"><span >{data.name}</span><span>说:</span></p>
        <p className="centence">{data.content}</p>
      </li>


}


// export default class ComponentItems extends Component{
//
//   handelDel = ()=>{
//     const {delCallBack} = this.props
//     console.log(delCallBack)
//     //我需要 当我点击的时候 出现一个自定义弹框  然后通过布尔值来判断是否删除，再将布尔值 传到app 再在app组件内删除
//     if(window.confirm(`真牛逼 啊  你要删除${this.props.data.name}吗？？？？！！！！`)){
//       //执行 app组件 的删除任务
//       delCallBack(this.props.data.id)
//     }
//   }
//   render(){
//     //此时 我收到了从 app-> list ->这里的state data
//     const { data } = this.props
//     //一会 需要通过这些传来的数据 来更新页面
//     //定义一个删除的 事件
//
//     return<li className="list-group-item">
//       <div className="handle">
//         <a href="javascript:;" onClick={this.handelDel}>删除</a>
//       </div>
//       <p className="user"><span >{data.name}</span><span>说:</span></p>
//       <p className="centence">{data.content}</p>
//     </li>
//
//   }
// }