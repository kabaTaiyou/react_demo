import React, {Component} from 'react'
import axios from 'axios'
import { subscribe } from 'pubsub-js'
export default class List extends Component {
  state = {
    init: true,
    longding: false,
    show: [],
    err: ''

  }

  componentDidMount(){
    subscribe('SEACH',(seach,seachName)=>{
      this.setState({
        init: false,
        longding: true,

      })
      console.log(seachName)
      axios.get(`https://api.github.com/search/users?q=${seachName}`)
        .then((res) => {
          console.log(res)
          //如果成功了 在这里修改状态
          this.setState({
            init: false,
            longding: false,
            show: res.data.items.map((item) => ({name: item.login, img: item.avatar_url, url: item.html_url})),
          })
        })
        .catch((err) => {
          //如果失败了
          this.setState({
            init: false,
            longding: false,
            show: [],
            err: 'errooooooooooooooo'
          })
        })
    })
  }
 /* componentWillReceiveProps(props) {
    //初始化
    this.setState({
      init: false,
      longding: true,

    })
    console.log(props)
    axios.get(`https://api.github.com/search/users?q=${props.seactName}`)
      .then((res) => {
        console.log(res)
        //如果成功了 在这里修改状态
        this.setState({
          init: false,
          longding: false,
          show: res.data.items.map((item) => ({name: item.login, img: item.avatar_url, url: item.html_url})),
        })
      })
      .catch((err) => {
        //如果失败了
        this.setState({
          init: false,
          longding: false,
          show: [],
          err: 'errooooooooooooooo'
        })
      })

  }*/

  render() {
    const {init, longding, show, err} = this.state
    if (init) {
      return <h1> 块输入啊啊 啊啊啊啊 </h1>

    } else if (longding) {
      return <h1> .............. </h1>
    } else if (show.length) {
      console.log(show)
      return <div className="row">
        {show.map((items, index) => {
          return <div className="card" key={index}>
            <a href={items.url} target="_blank">
              <img src={items.img} style={{width: 100}}/>
            </a>
            <p className="card-text">{items.name}</p>
          </div>
        })
        }
      </div>
    }else{
      return <h1> {err} </h1>
    }
  }

  }










