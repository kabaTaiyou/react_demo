import React,{Component} from 'react'
import Seach from './components/seach'
import List from './components/list'
import './index.css'
export default class App extends Component{

  state = {
    seactName:''
  }
  // changeSeachName = (seactName)=>{
  //   console.log(seactName,'seactName')
  //   this.setState({
  //     seactName:seactName
  //   })
  // }

  render(){
    return   <div className="container">
      {/*<Seach  /!*changeSeachName={this.changeSeachName}*!//>*/}
      <Seach />
      <List seactName={this.state.seactName}/>
    </div>
  }

}