import React,{Component} from 'react'

export default class Mdir extends Component {
  messages = [
    {id: 1, title: 'message1', content: 'message0001'},
    {id: 2, title: 'message2', content: 'message0002'},
    {id: 3, title: 'message3', content: 'message0003'}
  ]
  render(){
   const id = this.props.match.params.id
   const me = this.messages.find((items)=>{
     return items.id === +id
    })
    return <ul>
      <li>  id:{me.id}</li>
      <li>  name:{me.title}</li>
      <li>  content:{me.content}</li>
    </ul>
  }
}